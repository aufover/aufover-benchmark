{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "audit-3.0.6-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/valgrind/output",
        "time-created": "2022-11-23 19:36:37",
        "time-finished": "2022-11-23 19:42:47",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/audit-3.0.6-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1301,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301 |         int hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|   \tOM_uint32 major_status, minor_status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|   \tgss_buffer_desc utok, etok;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|-> \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1301,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301 |         int hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|   \tOM_uint32 major_status, minor_status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|   \tgss_buffer_desc utok, etok;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|-> \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1302,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'type' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302 |         uint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|   \tgss_buffer_desc utok, etok;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|   \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|-> \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1304|   \trc = recv_token (sock, &etok);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'recv_msg_gss'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1302,
                    "column": 30,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'seq' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302 |         uint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|   \tgss_buffer_desc utok, etok;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|   \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|-> \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1304|   \trc = recv_token (sock, &etok);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1375,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375 |         int hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1373|   static int recv_msg_tcp (unsigned char *header, char *msg, uint32_t *mlen)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1374|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375|-> \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1377|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1375,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375 |         int hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1373|   static int recv_msg_tcp (unsigned char *header, char *msg, uint32_t *mlen)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1374|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375|-> \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1377|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1376,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'type' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376 |         uint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1374|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375|   \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376|-> \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1377|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1378|   \terrno = 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'recv_msg_tcp'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1376,
                    "column": 30,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'seq' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376 |         uint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1374|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1375|   \tint hver, mver, rc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376|-> \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1377|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1378|   \terrno = 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1414,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1412|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1413|   \tunsigned char header[AUDIT_RMW_HEADER_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416|   \tchar msg[MAX_AUDIT_MESSAGE_LENGTH+1];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1414,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1412|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1413|   \tunsigned char header[AUDIT_RMW_HEADER_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416|   \tchar msg[MAX_AUDIT_MESSAGE_LENGTH+1];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'check_message_managed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1415,
                    "column": 30,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'seq' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415 |         uint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1413|   \tunsigned char header[AUDIT_RMW_HEADER_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414|   \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415|-> \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416|   \tchar msg[MAX_AUDIT_MESSAGE_LENGTH+1];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1417|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1491,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1491 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1489|   \tstatic int sequence_id = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1490|   \tunsigned char header[AUDIT_RMW_HEADER_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1491|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1492|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1493|   \tchar msg[MAX_AUDIT_MESSAGE_LENGTH+1];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'relay_sock_managed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/remote/audisp-remote.c",
                    "line": 1491,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1491 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1489|   \tstatic int sequence_id = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1490|   \tunsigned char header[AUDIT_RMW_HEADER_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1491|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1492|   \tuint32_t type, rlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1493|   \tchar msg[MAX_AUDIT_MESSAGE_LENGTH+1];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'submission_thread_main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 106,
                    "column": 30,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'zos_remote_init' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |         rc = zos_remote_init(&zos_remote_inst, conf.server,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 297,
                    "column": 21,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297 | int zos_remote_init(ZOS_REMOTE *, const char *, int, const char *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           log_debug(\"Starting event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->         rc = zos_remote_init(&zos_remote_inst, conf.server, ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|                             conf.port, conf.user,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|                             conf.password,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 128,
                    "column": 39,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'submit_request_s' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 |                 rc = submit_request_s(&zos_remote_inst, ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 309,
                    "column": 22,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 | int submit_request_s(ZOS_REMOTE *, BerElement *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                   debug_ber(ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->                 rc = submit_request_s(&zos_remote_inst, ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                   if (rc == ICTX_E_FATAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                           log_err(\"Error - Fatal error in event submission. Aborting\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 141,
                    "column": 28,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'zos_remote_destroy' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141 |         zos_remote_destroy(&zos_remote_inst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 303,
                    "column": 25,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | void zos_remote_destroy(ZOS_REMOTE *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|           log_debug(\"Stopping event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->         zos_remote_destroy(&zos_remote_inst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/auparse/interpret.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_interpret'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/auparse/interpret.c",
                    "line": 3009,
                    "column": 22,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3009 |         nvlist *nv = &r->nv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3007|   const char *do_interpret(const rnode *r, auparse_esc_t escape_mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3008|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3009|-> \tnvlist *nv = &r->nv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3010|   \tint type;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3011|   \tidata id;",
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
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'auparse_callback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 294,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294 |     result = PyEval_CallObject(cb->func, arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       arglist = Py_BuildValue(\"OiO\", cb->py_AuParser, cb_event_type, cb->user_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|->     result = PyEval_CallObject(cb->func, arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       Py_DECREF(arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|       Py_XDECREF(result);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'AuParser_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 375,
                    "column": 31,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375 |                 if ((files[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|               for (i = 0; i < n; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|                   item = PySequence_GetItem(source, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|->                 if ((files[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                       PyErr_SetString(PyExc_ValueError, \"members of source sequence must be a string when source_type is AUSOURCE_FILE_ARRAY\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|                       Py_DECREF(item);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 418,
                    "column": 33,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418 |                 if ((buffers[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|               for (i = 0; i < n; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|                   item = PySequence_GetItem(source, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|->                 if ((buffers[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|                       PyErr_SetString(PyExc_ValueError, \"members of source sequence must be a string when source_type is AUSOURCE_BUFFER_ARRAY\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|                       Py_DECREF(item);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/lib/gen_tables.c",
                    "line": 89,
                    "column": 22,
                    "event": "warning[-Woverflow]",
                    "message": "overflow in conversion from 'long long unsigned int' to 'int' changes value from '4294967296' to '0'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 | #define _S(VAL, S) { (VAL), (S), 0, 0 },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/auparse/clone-flagtab.h",
                    "line": 47,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro '_S'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47 | _S(0x100000000ULL,      \"CLONE_CLEAR_SIGHAND\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   /* The mapping to store. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|   static struct value values[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|-> #define _S(VAL, S) { (VAL), (S), 0, 0 },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   #include TABLE_H",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   #undef _S",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-event.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fix_disk_permissions'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-event.c",
                    "line": 1029,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chown' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029 |         chown(dir, 0, config->log_group ? config->log_group : 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|   \tdir = dirname(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|   \tchmod(dir, config->log_group ? S_IRWXU|S_IRGRP|S_IXGRP : S_IRWXU);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|-> \tchown(dir, 0, config->log_group ? config->log_group : 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|   \t// Now, for each file...",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sockaddr_to_addr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 124,
                    "column": 37,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 45 bytes into a region of size 40",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103 |         return buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ~~~                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "......",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |         snprintf(buf, sizeof(buf), \"%s:%u\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 124,
                    "column": 36,
                    "event": "note",
                    "message": "using the range [0, 4294967295] for directive argument",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |         snprintf(buf, sizeof(buf), \"%s:%u\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 3 and 57 bytes into a destination of size 40",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   \tstatic char buf[40];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|-> \tsnprintf(buf, sizeof(buf), \"%s:%u\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   \t\tsockaddr_to_string(addr),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   \t\tsockaddr_to_port(addr));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'client_ack'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 500,
                    "column": 21,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'rc' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500 |                 int rc, mlen;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|   \t\tOM_uint32 major_status, minor_status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|   \t\tgss_buffer_desc utok, etok;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|-> \t\tint rc, mlen;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|   \t\tmlen = strlen(msg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 545,
                    "column": 24,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mlen' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  545 |         uint32_t type, mlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544|   \tunsigned char ch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  545|-> \tuint32_t type, mlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546|   \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 546,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544|   \tunsigned char ch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  545|   \tuint32_t type, mlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|   \tif (AUDIT_RMW_IS_MAGIC (header, length)) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'client_message'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 546,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546 |         int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544|   \tunsigned char ch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  545|   \tuint32_t type, mlen, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546|-> \tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|   \tif (AUDIT_RMW_IS_MAGIC (header, length)) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 677,
                    "column": 26,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'type' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677 |                 uint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   \tif (AUDIT_RMW_IS_MAGIC (io->buffer, (io->bufptr+r))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|-> \t\tuint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   \t\tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\tunsigned char *header = (unsigned char *)io->buffer;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 677,
                    "column": 37,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'seq' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677 |                 uint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   \tif (AUDIT_RMW_IS_MAGIC (io->buffer, (io->bufptr+r))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|-> \t\tuint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   \t\tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\tunsigned char *header = (unsigned char *)io->buffer;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 678,
                    "column": 21,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'hver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678 |                 int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   \tif (AUDIT_RMW_IS_MAGIC (io->buffer, (io->bufptr+r))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|   \t\tuint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|-> \t\tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\tunsigned char *header = (unsigned char *)io->buffer;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'auditd_tcp_client_handler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 678,
                    "column": 27,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'mver' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678 |                 int hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   \tif (AUDIT_RMW_IS_MAGIC (io->buffer, (io->bufptr+r))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|   \t\tuint32_t type, len, seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|-> \t\tint hver, mver;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\tunsigned char *header = (unsigned char *)io->buffer;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'auditd_tcp_listen_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 973,
                    "column": 41,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%lu' directive output may be truncated writing between 1 and 20 bytes into a region of size 16",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973 |         snprintf(local, sizeof(local), \"%lu\", config->tcp_listen_port);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 973,
                    "column": 40,
                    "event": "note",
                    "message": "directive argument in the range [1, 18446744073709551615]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973 |         snprintf(local, sizeof(local), \"%lu\", config->tcp_listen_port);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd-listen.c",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 2 and 21 bytes into a destination of size 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  971|   \thints.ai_socktype = SOCK_STREAM;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972|   \thints.ai_family = AF_UNSPEC;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973|-> \tsnprintf(local, sizeof(local), \"%lu\", config->tcp_listen_port);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  974|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  975|   \trc = getaddrinfo(NULL, local, &hints, &ai);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'netlink_handler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 488,
                    "column": 60,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 4096 bytes into a region of size between 397 and 416",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488 |                         \"op=error-halt auid=%u pid=%d subj=%s res=failed\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489 |                                                 audit_getloginuid(),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490 |                                                 getpid(), subj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                           ~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 44 and 4159 bytes into a destination of size 448",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|   \t\t\t\tif (*subj)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|   \t\t\t\t\tsnprintf(emsg, sizeof(emsg),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|-> \t\t\t\"op=error-halt auid=%u pid=%d subj=%s res=failed\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t\t\taudit_getloginuid(),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|   \t\t\t\t\t\tgetpid(), subj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'pipe_handler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 577,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'read' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577 |         read(pipefds[0], buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576|   \t// Drain the pipe - won't block because libev sets non-blocking mode",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577|-> \tread(pipefds[0], buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  578|   \tenqueue_event(reconfig_ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  579|   \treconfig_ev = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'reconfig_ready'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 585,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585 |         write(pipefds[1], msg, strlen(msg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|   \tconst char *msg = \"ready\\n\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|-> \twrite(pipefds[1], msg, strlen(msg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 828,
                    "column": 33,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 4096 bytes into a region of size between 320 and 383",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828 |                                 \"op=start ver=%s format=%s \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "......",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833 |                                 getuid(), session,  subj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 830,
                    "column": 53,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830 |                                 \"uid=%u ses=%u subj=%s res=success\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/auditd.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output 78 or more bytes (assuming 4237) into a destination of size 448",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  826|   \t\tif (getsubj(subj))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  827|   \t\t\tsnprintf(start, sizeof(start),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828|-> \t\t\t\t\"op=start ver=%s format=%s \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|   \t\t\t\t\"kernel=%.56s auid=%u pid=%d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   \t\t\t\t\"uid=%u ses=%u subj=%s res=success\",",
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
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'process_stdin'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 524,
                    "column": 13,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'siginterrupt' is deprecated: Use sigaction with SA_RESTART instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524 |             siginterrupt(SIGALRM, 1) == -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/sys/param.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/signal.h",
                    "line": 324,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324 | extern int siginterrupt (int __sig, int __interrupt) __THROW",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   \tif (signal(SIGALRM, alarm_handler) == SIG_ERR ||",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|-> \t    siginterrupt(SIGALRM, 1) == -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|   \t\treturn -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|   ",
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
                    "file_name": "audit-3.0.6/src/libev/ev.c",
                    "line": 2146,
                    "column": 31,
                    "event": "warning",
                    "message": "'ev_default_loop_ptr' initialized and declared 'extern'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2146 |   EV_API_DECL struct ev_loop *ev_default_loop_ptr = 0; /* needs to be initialised to make it a definition despite extern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2144|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2145|     static struct ev_loop default_loop_struct;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2146|->   EV_API_DECL struct ev_loop *ev_default_loop_ptr = 0; /* needs to be initialised to make it a definition despite extern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2147|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2148|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/libev/ev.c",
                    "line": 222,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev_iouring.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'iouring_fork'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev.h",
                    "line": 180,
                    "column": 20,
                    "event": "warning[-Wunused-value]",
                    "message": "left-hand operand of comma expression has no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180 | # define EV_A_ EV_A,                              /* a loop as first of multiple arguments */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev.h",
                    "line": 698,
                    "column": 52,
                    "event": "note",
                    "message": "in definition of macro 'ev_io_set'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698 | #define ev_io_set(ev,fd_,events_)            do { (ev)->fd = (fd_); (ev)->events = (events_) | EV__IOFDSET; } while (0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev_iouring.c",
                    "line": 428,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'EV_A_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428 |   ev_io_set   (EV_A_ &iouring_tfd_w, iouring_tfd, EV_READ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   # define EV_P_ EV_P,                              /* a loop as first of multiple parameters */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|   # define EV_A  loop                               /* a loop as sole argument to a function call */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|-> # define EV_A_ EV_A,                              /* a loop as first of multiple arguments */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   # define EV_DEFAULT_UC  ev_default_loop_uc_ ()    /* the default loop, if initialised, as sole arg */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|   # define EV_DEFAULT_UC_ EV_DEFAULT_UC,            /* the default loop as first of multiple arguments */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 393,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "audit-3.0.6/src/libev/ev.c",
                    "line": 3108,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev_iouring.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'iouring_sqe_submit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/libev/ev_iouring.c",
                    "line": 300,
                    "column": 1,
                    "event": "warning[-Wreturn-type]",
                    "message": "no return statement in function returning non-void",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300 | }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|     /*ECB_MEMORY_FENCE_RELEASE; * for the time being we assume this is not needed */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|     ++iouring_to_submit;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|-> }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|   /*****************************************************************************/",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
