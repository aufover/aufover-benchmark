{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "nghttp2-1.45.1-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nghttp2-1.45.1-1.fc35/valgrind/output",
        "time-created": "2022-11-23 18:59:20",
        "time-finished": "2022-11-23 19:06:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nghttp2-1.45.1-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nghttp2-1.45.1-1.fc35/nghttp2-1.45.1-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nghttp2-1.45.1/src/HttpServer.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int nghttp2::HttpServer::run()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/HttpServer.cc",
                    "line": 2142,
                    "column": 35,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_CTX_set_session_id_context(SSL_CTX*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2142 |     SSL_CTX_set_session_id_context(ssl_ctx, sid_ctx, sizeof(sid_ctx) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2140|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2141|       const unsigned char sid_ctx[] = \"nghttpd\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2142|->     SSL_CTX_set_session_id_context(ssl_ctx, sid_ctx, sizeof(sid_ctx) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2143|       SSL_CTX_set_session_cache_mode(ssl_ctx, SSL_SESS_CACHE_SERVER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2144|   ",
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
                    "file_name": "nghttp2-1.45.1/src/h2load.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int h2load::Client::make_socket(addrinfo*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/h2load.cc",
                    "line": 560,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_fd(SSL*, int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560 |       SSL_set_fd(ssl, fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|         }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|->       SSL_set_fd(ssl, fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|         SSL_set_connect_state(ssl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|       }",
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
                    "file_name": "nghttp2-1.45.1/src/h2load.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int h2load::main(int, char**)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/h2load.cc",
                    "line": 2873,
                    "column": 26,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_CTX_set_alpn_protos(SSL_CTX*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2873 |   SSL_CTX_set_alpn_protos(ssl_ctx, proto_list.data(), proto_list.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2871|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2872|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2873|->   SSL_CTX_set_alpn_protos(ssl_ctx, proto_list.data(), proto_list.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2874|   #endif // OPENSSL_VERSION_NUMBER >= 0x10002000L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2875|   ",
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
                    "file_name": "nghttp2-1.45.1/src/nghttp.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int nghttp2::HttpClient::initiate_connection()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/nghttp.cc",
                    "line": 679,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_fd(SSL*, int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679 |       SSL_set_fd(ssl, fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|         }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|->       SSL_set_fd(ssl, fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|         SSL_set_connect_state(ssl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|   ",
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
                    "file_name": "nghttp2-1.45.1/src/nghttp.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int nghttp2::{anonymous}::communicate(const string&, const string&, uint16_t, std::vector<std::tuple<std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >, nghttp2_data_provider*, long int, int> >, const nghttp2_session_callbacks*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/nghttp.cc",
                    "line": 2332,
                    "column": 28,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_CTX_set_alpn_protos(SSL_CTX*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2332 |     SSL_CTX_set_alpn_protos(ssl_ctx, proto_list.data(), proto_list.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2330|       auto proto_list = util::get_default_alpn();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2331|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2332|->     SSL_CTX_set_alpn_protos(ssl_ctx, proto_list.data(), proto_list.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2333|   #endif // OPENSSL_VERSION_NUMBER >= 0x10002000L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2334|     }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int shrpx::{anonymous}::call_daemon()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx.cc",
                    "line": 1282,
                    "column": 10,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int chdir(const char*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282 |     chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1280|     if (sd_booted() && (getenv(\"NOTIFY_SOCKET\") != nullptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1281|       LOG(NOTICE) << \"Daemonising disabled under systemd\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282|->     chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1283|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1284|     }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_http2_session.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int shrpx::Http2Session::initiate_connection()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_http2_session.cc",
                    "line": 467,
                    "column": 26,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_session(SSL*, SSL_SESSION*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467 |           SSL_set_session(conn_.tls.ssl, tls_session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|           auto tls_session = tls::reuse_tls_session(addr_->tls_session_cache);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|           if (tls_session) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|->           SSL_set_session(conn_.tls.ssl, tls_session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|             SSL_SESSION_free(tls_session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|           }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_http2_upstream.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void shrpx::Http2Upstream::initiate_downstream(shrpx::Downstream*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_http2_upstream.cc",
                    "line": 463,
                    "column": 25,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'dconn_ptr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463 |   DownstreamConnection *dconn_ptr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|     int rv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|->   DownstreamConnection *dconn_ptr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|     for (;;) {",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_http_downstream_connection.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int shrpx::HttpDownstreamConnection::initiate_connection()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_http_downstream_connection.cc",
                    "line": 421,
                    "column": 24,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_session(SSL*, SSL_SESSION*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421 |         SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|         auto session = tls::reuse_tls_session(addr_->tls_session_cache);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|         if (session) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|->         SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|           SSL_SESSION_free(session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|         }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_https_upstream.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int shrpx::{anonymous}::htp_hdrs_completecb(llhttp_t*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_https_upstream.cc",
                    "line": 460,
                    "column": 25,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'dconn_ptr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460 |   DownstreamConnection *dconn_ptr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|->   DownstreamConnection *dconn_ptr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|     for (;;) {",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_live_check.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int shrpx::LiveCheck::initiate_connection()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_live_check.cc",
                    "line": 308,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_session(SSL*, SSL_SESSION*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308 |       SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|       auto session = tls::reuse_tls_session(addr_->tls_session_cache);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|       if (session) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|->       SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|         SSL_SESSION_free(session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|       }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_memcached_connection.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'int shrpx::MemcachedConnection::initiate_connection()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_memcached_connection.cc",
                    "line": 191,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_session(SSL*, SSL_SESSION*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |       SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|       auto session = tls::reuse_tls_session(tls_session_cache_);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       if (session) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|->       SSL_set_session(conn_.tls.ssl, session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|         SSL_SESSION_free(session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|       }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'int shrpx::tls::{anonymous}::tls_session_new_cb(SSL*, SSL_SESSION*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 415,
                    "column": 18,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int i2d_SSL_SESSION(SSL_SESSION*, unsigned char**)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415 |   i2d_SSL_SESSION(session, &buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|     req->value.resize(sessionlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|     auto buf = &req->value[0];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|->   i2d_SSL_SESSION(session, &buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|     req->expiry = 12_h;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|     req->cb = [](MemcachedRequest *req, MemcachedResult res) {",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'SSL_CTX* shrpx::tls::create_ssl_context(const char*, const char*, const std::vector<unsigned char>&)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 950,
                    "column": 33,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_CTX_set_session_id_context(SSL_CTX*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950 |   SSL_CTX_set_session_id_context(ssl_ctx, sid_ctx, sizeof(sid_ctx) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|     const unsigned char sid_ctx[] = \"shrpx\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|->   SSL_CTX_set_session_id_context(ssl_ctx, sid_ctx, sizeof(sid_ctx) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951|     SSL_CTX_set_session_cache_mode(ssl_ctx, SSL_SESS_CACHE_SERVER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  952|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 958,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'long int SSL_CTX_set_timeout(SSL_CTX*, long int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  958 |   SSL_CTX_set_timeout(ssl_ctx, tlsconf.session_timeout.count());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  956|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  957|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  958|->   SSL_CTX_set_timeout(ssl_ctx, tlsconf.session_timeout.count());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  959|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960|     if (SSL_CTX_set_cipher_list(ssl_ctx, tlsconf.ciphers.c_str()) == 0) {",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'void shrpx::tls::setup_downstream_http2_alpn(SSL*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 2392,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_alpn_protos(SSL*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2392 |   SSL_set_alpn_protos(ssl, alpn.data(), alpn.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2390|     // ALPN advertisement",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2391|     auto alpn = util::get_default_alpn();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2392|->   SSL_set_alpn_protos(ssl, alpn.data(), alpn.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2393|   #endif // OPENSSL_VERSION_NUMBER >= 0x10002000L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2394|   }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'void shrpx::tls::setup_downstream_http1_alpn(SSL*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 2399,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int SSL_set_alpn_protos(SSL*, const unsigned char*, unsigned int)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2399 |   SSL_set_alpn_protos(ssl, NGHTTP2_H1_1_ALPN.byte(), NGHTTP2_H1_1_ALPN.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2397|   #if OPENSSL_VERSION_NUMBER >= 0x10002000L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2398|     // ALPN advertisement",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2399|->   SSL_set_alpn_protos(ssl, NGHTTP2_H1_1_ALPN.byte(), NGHTTP2_H1_1_ALPN.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2400|   #endif // OPENSSL_VERSION_NUMBER >= 0x10002000L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2401|   }",
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
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'std::vector<unsigned char> shrpx::tls::{anonymous}::serialize_ssl_session(SSL_SESSION*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nghttp2-1.45.1/src/shrpx_tls.cc",
                    "line": 2416,
                    "column": 18,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int i2d_SSL_SESSION(SSL_SESSION*, unsigned char**)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2416 |   i2d_SSL_SESSION(session, &p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2414|     auto buf = std::vector<uint8_t>(len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2415|     auto p = buf.data();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2416|->   i2d_SSL_SESSION(session, &p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2417|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2418|     return buf;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
