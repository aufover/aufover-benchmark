{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "json-c-0.15-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/json-c-0.15-2.fc35/cbmc/output",
        "time-created": "2023-01-26 09:09:58",
        "time-finished": "2023-01-26 09:29:14",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/json-c-0.15-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/json-c-0.15-2.fc35/json-c-0.15-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> int parse_flags(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \tint arg_idx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> int parse_flags(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \tint arg_idx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> int parse_flags(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \tint arg_idx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> int parse_flags(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \tint arg_idx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> int parse_flags(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \tint arg_idx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcasecmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "error",
                    "message": "in strcasecmp: pointer_arithmetic: pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[0l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].flag = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[0l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[1l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].flag = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[1l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[2l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].flag = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[2l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:pointer:        format_args[3l].arg = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].flag = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 19,
                    "event": "note",
                    "message": "entry_point_function:19:integer:        format_args[3l].$pad2 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 189,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:189:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_string = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_int = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_null = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_object = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 191,
                    "event": "note",
                    "message": "main:191:pointer:        my_array = ((json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 192,
                    "event": "note",
                    "message": "main:192:integer:        i = 0ul",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 194,
                    "event": "note",
                    "message": "main:194:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "from_main:function-call:parse_flags",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test1.c",
                    "line": 200,
                    "event": "note",
                    "message": "function_parameter_set_in:main:200:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 32,
                    "event": "note",
                    "message": "parse_flags:32:integer:        arg_idx = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 33,
                    "event": "note",
                    "message": "parse_flags:33:integer:        sflags = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "parse_flags:34:integer:        arg_idx = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "parse_flags:36:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 37,
                    "event": "note",
                    "message": "parse_flags:37:integer:        jj = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "from_parse_flags:function-call:strcasecmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/parse_flags.c",
                    "line": 39,
                    "event": "note",
                    "message": "function_parameter_set_in:parse_flags:39:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcasecmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   \t\tfor (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> \t\t\tif (strcasecmp(argv[arg_idx], format_args[jj].arg) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   \t\t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \t\t\t\tsflags |= format_args[jj].flag;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|       \"            \\\"GlossList\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       \"                \\\"GlossEntry\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->     \"                    \\\"ID\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       \"                    \\\"SortAs\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       \"                    \\\"GlossTerm\\\": \\\"Standard Generalized Markup Language\\\",\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|       \"            \\\"GlossList\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       \"                \\\"GlossEntry\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->     \"                    \\\"ID\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       \"                    \\\"SortAs\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       \"                    \\\"GlossTerm\\\": \\\"Standard Generalized Markup Language\\\",\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|       \"            \\\"GlossList\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       \"                \\\"GlossEntry\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->     \"                    \\\"ID\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       \"                    \\\"SortAs\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       \"                    \\\"GlossTerm\\\": \\\"Standard Generalized Markup Language\\\",\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|       \"            \\\"GlossList\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       \"                \\\"GlossEntry\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->     \"                    \\\"ID\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       \"                    \\\"SortAs\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       \"                    \\\"GlossTerm\\\": \\\"Standard Generalized Markup Language\\\",\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|       \"            \\\"GlossList\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       \"                \\\"GlossEntry\\\": {\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->     \"                    \\\"ID\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       \"                    \\\"SortAs\\\": \\\"SGML\\\",\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       \"                    \\\"GlossTerm\\\": \\\"Standard Generalized Markup Language\\\",\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "error",
                    "message": "in strcmp: pointer_arithmetic: pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 0
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].errno_value = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[0l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].errno_value = 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[1l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].errno_value = 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[2l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].errno_value = 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[3l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].errno_value = 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[4l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].errno_value = 6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[5l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].errno_value = 7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[6l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].errno_value = 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[7l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].errno_value = 9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[8l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].errno_value = 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[9l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].errno_value = 35",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[10l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].errno_value = 12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[11l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].errno_value = 13",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[12l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].errno_value = 14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[13l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].errno_value = 15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[14l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].errno_value = 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[15l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].errno_value = 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[16l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].errno_value = 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[17l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].errno_value = 19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[18l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[18l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].errno_value = 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[19l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[19l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].errno_value = 21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[20l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[20l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].errno_value = 22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[21l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[21l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].errno_value = 23",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[22l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[22l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].errno_value = 24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[23l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[23l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].errno_value = 25",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[24l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[24l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].errno_value = 26",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[25l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[25l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].errno_value = 27",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[26l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[26l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].errno_value = 28",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[27l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[27l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].errno_value = 29",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[28l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[28l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].errno_value = 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[29l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[29l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].errno_value = 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[30l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[30l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].errno_value = 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[31l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[31l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].errno_value = 33",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[32l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[32l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].errno_value = 34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[33l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[33l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].errno_value = 11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[34l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[34l].errno_str = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].errno_value = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:integer:        errno_list[35l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/strerror_override.c",
                    "line": 12,
                    "event": "note",
                    "message": "entry_point_function:12:pointer:        errno_list[35l].errno_str = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[0l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[3l] = 's'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[4l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 70,
                    "event": "note",
                    "message": "entry_point_function:70:integer:        json_false_str[5l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[0l] = 'I'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 63,
                    "event": "note",
                    "message": "entry_point_function:63:integer:        json_inf_str[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[0l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[1l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[2l] = 'f'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[3l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[4l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[5l] = 'i'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[6l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[7l] = 'y'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 64,
                    "event": "note",
                    "message": "entry_point_function:64:integer:        json_inf_str_lower[8l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[0l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[1l] = 'a'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[2l] = 'N'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 66,
                    "event": "note",
                    "message": "entry_point_function:66:integer:        json_nan_str[3l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[0l] = 'n'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[1l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[2l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[3l] = 'l'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 61,
                    "event": "note",
                    "message": "entry_point_function:61:integer:        json_null_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[7l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[8l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[9l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[10l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[11l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[12l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[13l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[14l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 74,
                    "event": "note",
                    "message": "entry_point_function:74:pointer:        json_tokener_errors[15l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[0l] = 't'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[1l] = 'r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[2l] = 'u'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[3l] = 'e'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 68,
                    "event": "note",
                    "message": "entry_point_function:68:integer:        json_true_str[4l] = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[0l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[1l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[2l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[3l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[4l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[5l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_util.c",
                    "line": 275,
                    "event": "note",
                    "message": "entry_point_function:275:pointer:        json_type_name[6l] = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[0l] = 239",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[1l] = 191",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/json_tokener.c",
                    "line": 121,
                    "event": "note",
                    "message": "entry_point_function:121:integer:        utf8_replacement_char[2l] = 189",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:integer:        argc = 2147483647",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 113,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:113:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 115,
                    "event": "note",
                    "message": "main:115:pointer:        src3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst1 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst2 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 116,
                    "event": "note",
                    "message": "main:116:pointer:        dst3 = ((struct json_object *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 117,
                    "event": "note",
                    "message": "main:117:integer:        benchmark = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s1 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "json-c-json-c-0.15-20200726/tests/test_deep_copy.c",
                    "line": 119,
                    "event": "note",
                    "message": "function_parameter_set_in:main:119:pointer:        s2 = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   \tint benchmark = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|-> \tif (argc > 1 && strcmp(argv[1], \"--benchmark\") == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t\tbenchmark = 1;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
