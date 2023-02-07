{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libffi-3.1-29.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/symbiotic/output",
        "time-created": "2023-01-30 15:31:26",
        "time-finished": "2023-01-30 16:58:39",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/libffi-3.1-29.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 33,
                    "event": "error",
                    "message": "memory error: memory leak detected",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 33,
                    "event": "note",
                    "message": "Additional Info: address: 43:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 33,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [43] of size 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 33,
                    "event": "note",
                    "message": "Additional Info: MO32[24] allocated at main():  %22 = call noalias align 16 i8* @malloc(i64 24) #6, !dbg !79",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 81,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: ffi_prep_cif: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|-> int main(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \tffi_type point_type;",
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
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 113,
                    "event": "error",
                    "message": "memory error: memory leak detected",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 113,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 113,
                    "event": "note",
                    "message": "Additional Info: address: 43:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 113,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [43] of size 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 113,
                    "event": "note",
                    "message": "Additional Info: MO32[24] allocated at main():  %22 = call noalias align 16 i8* @malloc(i64 24) #6, !dbg !79",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/testsuite/libffi.call/pyobjc-tc.c",
                    "line": 81,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: ffi_prep_cif: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|-> \texit(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
