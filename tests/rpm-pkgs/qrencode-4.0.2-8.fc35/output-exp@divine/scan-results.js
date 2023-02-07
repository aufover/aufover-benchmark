{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "qrencode-4.0.2-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/divine/output",
        "time-created": "2023-01-26 15:01:37",
        "time-finished": "2023-01-26 15:12:46",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/qrencode-4.0.2-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "DIVINE_WARNING",
            "tool": "divine",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_newframe':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 136,
                    "event": "note",
                    "message": "Failed to open \"frame\":: ENOENT (no such file or directory)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 136,
                    "event": "error",
                    "message": "Uncaught signal.",
                    "verbosity_level": 0
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 136,
                    "event": "note",
                    "message": "control error in kernel",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/fault.hpp",
                    "line": 119,
                    "event": "note",
                    "message": "void __dios::FaultBase::handler<__dios::Context>(_VM_Fault, _VM_Frame*, void (*)())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/arch/divm/fault.c",
                    "line": 12,
                    "event": "note",
                    "message": "__dios_fault",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/sched_base.hpp",
                    "line": 408,
                    "event": "note",
                    "message": "int __dios::Scheduler<__dios::Base>::_kill<__dios::ProcessManager<__dios::Fault<__dios::Scheduler<__dios::Base> > >::kill(int, int)::'lambda'(auto*)>(int, int, auto)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/procmanager.hpp",
                    "line": 275,
                    "event": "note",
                    "message": "__dios::ProcessManager<__dios::Fault<__dios::Scheduler<__dios::Base> > >::kill(int, int)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/include/sys/argpad.hpp",
                    "line": 53,
                    "event": "note",
                    "message": "__dios::SysProxy::kill(int, int)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/include/sys/argpad.hpp",
                    "line": 113,
                    "event": "note",
                    "message": "__libc_kill",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/_PDCLIB/glue.c",
                    "line": 147,
                    "event": "note",
                    "message": "raise",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/stdlib/abort.c",
                    "line": 14,
                    "event": "note",
                    "message": "abort",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 136,
                    "event": "note",
                    "message": "test_newframe",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_qrspec.c",
                    "line": 299,
                    "event": "note",
                    "message": "main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   \tif(fp == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   \t\tperror(\"Failed to open \\\"frame\\\":\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|-> \t\tabort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   \tfor(i=1; i<=QRSPEC_VERSION_MAX; i++) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "DIVINE_WARNING",
            "tool": "divine",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "qrencode-4.0.2/tests/test_split.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_toupper':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_split.c",
                    "line": 344,
                    "event": "error",
                    "message": "access of size 1 at [heap*] is 1 bytes out of bounds",
                    "verbosity_level": 0
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_split.c",
                    "line": 344,
                    "event": "note",
                    "message": "memory error in userspace",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/fault.hpp",
                    "line": 119,
                    "event": "note",
                    "message": "void __dios::FaultBase::handler<__dios::Context>(_VM_Fault, _VM_Frame*, void (*)())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/string/strncmp.c",
                    "line": 13,
                    "event": "note",
                    "message": "strncmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_split.c",
                    "line": 344,
                    "event": "note",
                    "message": "test_toupper",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_split.c",
                    "line": 542,
                    "event": "note",
                    "message": "main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/sys/start.cpp",
                    "line": 91,
                    "event": "note",
                    "message": "__dios_start",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t\terr++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|-> \tif(strncmp((char *)list->data, \"ABCDE\", list->size)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\terr++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   \t}",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
