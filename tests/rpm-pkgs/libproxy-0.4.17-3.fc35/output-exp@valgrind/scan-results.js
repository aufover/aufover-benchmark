{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libproxy-0.4.17-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/valgrind/output",
        "time-created": "2022-11-23 13:59:44",
        "time-finished": "2022-11-23 14:05:13",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/libproxy-0.4.17-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libproxy-0.4.17/libproxy/modules/config_gnome3.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libmodman::base_extension** gnome_config_extension_init()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/modules/config_gnome3.cpp",
                    "line": 291,
                    "column": 16,
                    "event": "warning[-Wcatch-value=]",
                    "message": "catching polymorphic type 'class std::runtime_error' by value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291 |         catch (runtime_error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|   \t\treturn retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|-> \tcatch (runtime_error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|   \t\tdelete[] retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   \t\treturn NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libproxy-0.4.17/libproxy/modules/config_pacrunner.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'bool is_pacrunner_available()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/modules/config_pacrunner.cpp",
                    "line": 160,
                    "column": 1,
                    "event": "warning[-Wunused-label]",
                    "message": "label 'out_reply' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160 | out_reply:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   \t\tfound = owned;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|-> out_reply:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|   \tdbus_message_unref(reply);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   out_sys:",
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
                    "file_name": "libproxy-0.4.17/libproxy/proxy.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void libproxy::proxy_factory::get_config(libproxy::url&, std::vector<libproxy::url>&, std::string&)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/proxy.cpp",
                    "line": 276,
                    "column": 38,
                    "event": "warning[-Wcatch-value=]",
                    "message": "catching polymorphic type 'class std::runtime_error' by value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276 |                 catch (runtime_error e) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   \t\t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|-> \t\tcatch (runtime_error e) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   \t\t\tignore = \"\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|   \t\t}",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void TestServer::start()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 40,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40 |                         int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~",
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
                    "message": "   39|   \t\t\tstruct sockaddr_in addr = {0};",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \t\t\tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \t\t\tint i = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void TestServer::sendBasic(int)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 180,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180 |                         int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   \t\tvoid sendBasic(int csock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|-> \t\t\tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   \t\t\tconst char *basic =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|   \t\t\t\t\"HTTP/1.1 200 OK\\n\" \\",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void TestServer::sendTruncated(int)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 195,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 |                         int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \t\tvoid sendTruncated(int csock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|-> \t\t\tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   \t\t\tconst char *basic =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   \t\t\t\t\"HTTP/1.1 200 OK\\n\" \\",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void TestServer::sendChunked(int)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 232,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232 |                         int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   \t\tvoid sendChunked(int csock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|-> \t\t\tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|   \t\t\tconst char *chunked =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   \t\t\t\t\"HTTP/1.1 200 OK\\n\" \\",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void TestServer::sendWithoutContentLength(int)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 252,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 |                         int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \t\tvoid sendWithoutContentLength(int csock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \t\t\tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \t\t\tconst char *basic =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \t\t\t\t\"HTTP/1.1 200 OK\\n\" \\",
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
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int main()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 274,
                    "column": 13,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'rtv'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274 |         int rtv = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   \tTestServer server(1983);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|-> \tint rtv = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   \tchar *pac;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libproxy-0.4.17/redhat-linux-build/libproxy/test/get-pac-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 872",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/url.cpp",
                    "line": 535,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from operator new[](unsigned long)()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/url.cpp",
                    "line": 535,
                    "event": "note",
                    "message": "called from libproxy::url::get_pac()()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libproxy-0.4.17/libproxy/test/get-pac-test.cpp",
                    "line": 299,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|   \t\tif (content_length == 0 || content_length == dynamic_buffer.size()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|-> \t\t\tbuffer = new char[dynamic_buffer.size() + 1];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|   \t\t\tif (!dynamic_buffer.empty()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   \t\t\t\tmemcpy(buffer, dynamic_buffer.data(), dynamic_buffer.size());",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
