{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "protobuf-c-1.4.0-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/valgrind/output",
        "time-created": "2022-11-23 17:11:21",
        "time-finished": "2022-11-23 17:16:53",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/protobuf-c-1.4.0-1.fc35/protobuf-c-1.4.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "protobuf-c-1.4.0/protoc-c/c_helpers.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'void google::protobuf::compiler::c::PrintComment(google::protobuf::io::Printer*, std::string)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/protoc-c/c_helpers.cc",
                    "line": 237,
                    "column": 25,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integer expressions of different signedness: 'int' and 'std::vector<std::__cxx11::basic_string<char> >::size_type' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237 |       for (int i = 0; i < comment_lines.size(); i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|         SplitStringUsing (comment, \"\\r\\n\", &comment_lines);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|         printer->Print (\"/*\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|->       for (int i = 0; i < comment_lines.size(); i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|         {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|            if (!comment_lines[i].empty())",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "protobuf-c-1.4.0/protoc-c/c_helpers.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'std::set<std::__cxx11::basic_string<char> > google::protobuf::compiler::c::MakeKeywordsMap()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "protobuf-c-1.4.0/protoc-c/c_helpers.cc",
                    "line": 289,
                    "column": 21,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integer expressions of different signedness: 'int' and 'long unsigned int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289 |   for (int i = 0; i < GOOGLE_ARRAYSIZE(kKeywordList); i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|   std::set<std::string> MakeKeywordsMap() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|     std::set<std::string> result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|->   for (int i = 0; i < GOOGLE_ARRAYSIZE(kKeywordList); i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|       result.insert(kKeywordList[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|     }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
