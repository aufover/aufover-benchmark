{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "protobuf-c-1.4.0-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/symbiotic/output",
        "time-created": "2023-01-30 03:52:04",
        "time-finished": "2023-01-30 03:59:06",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/protobuf-c-1.4.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "protobuf-c-1.4.0/t/generated-code/test-generated-code.c",
                    "line": 53,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/generated-code/test-generated-code.c",
                    "line": 53,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/generated-code/test-generated-code.c",
                    "line": 53,
                    "event": "note",
                    "message": "Additional Info: address: 280375465082880:32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/generated-code/test-generated-code.c",
                    "line": 53,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/test.pb-c.c",
                    "line": 32,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_get_packed_size: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/test.pb-c.c",
                    "line": 39,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_pack: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/test.pb-c.c",
                    "line": 55,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_unpack: len 8 bytes, [5 times 0x0|0xff|2 times 0x0] (i64: 280375465082880)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/test.pb-c.c",
                    "line": 55,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_unpack (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     person2 = foo__person__unpack (NULL, size, packed);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|     assert (person2 != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   assert (person2->id == 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   #ifndef PROTO3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|     assert (person2->email == NULL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 14,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 14,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 14,
                    "event": "note",
                    "message": "Additional Info: address: 4278190080:24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 14,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 10,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_descriptor_get_field_by_name: len 8 bytes, [3 times 0x0|0xff|4 times 0x0] (i64: 4278190080)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue204/issue204.c",
                    "line": 10,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_descriptor_get_field_by_name (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12|   \t\t\t\t\t\t\"first_oneof\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13|   \tassert (field);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|-> \toff_name = field->offset;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|   \tfield = protobuf_c_message_descriptor_get_field(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16|   \t\t\t\t\t\tmsg.base.descriptor,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.c",
                    "line": 22,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.c",
                    "line": 22,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.c",
                    "line": 22,
                    "event": "note",
                    "message": "Additional Info: address: 71776119061217280:24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.c",
                    "line": 22,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.pb-c.c",
                    "line": 88,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_unpack: len 8 bytes, [6 times 0x0|0xff|0x0] (i64: 71776119061217280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/t/issue440/issue440.pb-c.c",
                    "line": 88,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: protobuf_c_message_unpack (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   \tBoolean *msg = boolean__unpack (NULL, sizeof protoc, protoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   \tassert(msg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> \tassert(msg->n_boolean == 4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   \tassert(msg->boolean[0] == 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   \tassert(msg->boolean[1] == 1);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
