{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "autogen-5.18.16-9.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/symbiotic/output",
        "time-created": "2023-02-02 00:38:43",
        "time-finished": "2023-02-02 02:49:06",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/autogen-5.18.16-9.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/ag.c",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 57,
                    "column": 16,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        return CGI_EV_END;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~ ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       if (inlen <= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|->         return CGI_EV_END;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       if (outlen < 4) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 67,
                    "column": 16,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        return CGI_EV_ALPHA;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~ ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|       if (IS_ALPHABETIC_CHAR( ch ))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|->         return CGI_EV_ALPHA;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       if (IS_DEC_DIGIT_CHAR( ch ))",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 70,
                    "column": 16,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        return CGI_EV_NAME_CHAR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~ ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       if (IS_DEC_DIGIT_CHAR( ch ))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|->         return CGI_EV_NAME_CHAR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       switch (ch) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 73,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case '_': return CGI_EV_NAME_CHAR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       switch (ch) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|->     case '_': return CGI_EV_NAME_CHAR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       case '=': return CGI_EV_EQUAL;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 74,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case '=': return CGI_EV_EQUAL;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       switch (ch) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       case '_': return CGI_EV_NAME_CHAR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|->     case '=': return CGI_EV_EQUAL;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 75,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       case '_': return CGI_EV_NAME_CHAR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       case '=': return CGI_EV_EQUAL;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       case '&': return CGI_EV_SEPARATOR; break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 76,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       case '=': return CGI_EV_EQUAL;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|->     case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       case '&': return CGI_EV_SEPARATOR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|       default:  return CGI_EV_OTHER;     break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 77,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case '&': return CGI_EV_SEPARATOR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       case '+': return CGI_EV_SPACE;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|->     case '&': return CGI_EV_SEPARATOR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|       default:  return CGI_EV_OTHER;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 78,
                    "column": 22,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_event' to different enumeration type 'te_cgi_state'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    default:  return CGI_EV_OTHER;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~ ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       case '%': return CGI_EV_ESCAPE;    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       case '&': return CGI_EV_SEPARATOR; break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|->     default:  return CGI_EV_OTHER;     break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/cgi-fsm.c",
                    "line": 236,
                    "column": 21,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from enumeration type 'te_cgi_state' to different enumeration type 'te_cgi_event'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        trans_evt = get_next_event(curCh, inlen--, saved_pzOut, outlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~ ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|           /* START == FIND TRANSITION == DO NOT CHANGE THIS COMMENT */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|           char curCh = *(pzSrc++);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|->         trans_evt = get_next_event(curCh, inlen--, saved_pzOut, outlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|           /* END   == FIND TRANSITION == DO NOT CHANGE THIS COMMENT */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/ag.c",
                    "line": 11,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/defParse-fsm.c",
                    "line": 358,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/defParse.x",
                    "line": 120,
                    "column": 1,
                    "event": "warning[-Winvalid-noreturn]",
                    "message": "function declared 'noreturn' should not return",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|       yyerror(VOIDP(\"invalid transition\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       NOT_REACHED",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|-> }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   static te_dp_state",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 909,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/autoopts.h",
                    "line": 458,
                    "column": 51,
                    "event": "warning[-Wmissing-field-initializers]",
                    "message": "missing field 'pzReq' initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|   static char const   zNil[] = \"\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|-> static arg_types_t  argTypes             = { NULL };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|   static char         line_fmt_buf[32];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|   static bool         displayEnum          = false;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 909,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/autoopts.h",
                    "line": 458,
                    "column": 51,
                    "event": "warning[-Wmissing-field-initializers]",
                    "message": "static arg_types_t  argTypes             = { NULL };missing field 'pzReq' initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static arg_types_t  argTypes             = { NULL };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|   static char const   zNil[] = \"\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|-> static arg_types_t  argTypes             = { NULL };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|   static char         line_fmt_buf[32];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|   static bool         displayEnum          = false;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/enum.c",
                    "line": 87,
                    "column": 38,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(option_usage_fp, ENUM_ERR_LINE, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 70,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ENUM_ERR_LINE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 91,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   323 */ \"  %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       if (max_len > 35) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           do  {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|->             fprintf(option_usage_fp, ENUM_ERR_LINE, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|           } while (--ct_down > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/enum.c",
                    "line": 110,
                    "column": 31,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|           char fmt[16];  /* format for all-but-last entries on a line */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|->         if (snprintf(fmt, 16, ENUM_ERR_WIDTH, (int)max_len) >= 16)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|               option_exits(EXIT_FAILURE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|           max_len = 78 / max_len; /* max_len is now max entries on a line */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/enum.c",
                    "line": 124,
                    "column": 42,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(option_usage_fp, NLSTR_SPACE_FMT, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 118,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NLSTR_SPACE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NLSTR_SPACE_FMT       (ao_strs_strtable+474)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 110,
                    "column": 16,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"  \\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|                    *  Last entry on a line.  Start next line, too.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|                    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->                 fprintf(option_usage_fp, NLSTR_SPACE_FMT, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                   ent_no = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/enum.c",
                    "line": 131,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(option_usage_fp, NLSTR_FMT, *paz_names);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 116,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NLSTR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NLSTR_FMT             (ao_strs_strtable+470)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 108,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   470 */ \"%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                   fprintf(option_usage_fp, fmt, *(paz_names++) );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|->         fprintf(option_usage_fp, NLSTR_FMT, *paz_names);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "In file included from libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/enum.c",
                    "line": 283,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(INVALID_FMT, ix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 88,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'INVALID_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define INVALID_FMT           (ao_strs_strtable+375)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 98,
                    "column": 24,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   375 */ \"INVALID-%d\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|           if (ix >= name_ct)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->             printf(INVALID_FMT, ix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|           else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|               fputs(paz_names[ ix ], stdout);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/find.c",
                    "line": 84,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, zambig_file, hyph, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 334,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zambig_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 43,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*     4 */ \"  %s%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|           if (strneqvcmp(name, pOD->pz_Name, nm_len) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->             fprintf(stderr, zambig_file, hyph, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           else if (  (pOD->pz_DisableName != NULL)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/find.c",
                    "line": 89,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, zambig_file, hyph, pOD->pz_DisableName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 334,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zambig_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 43,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*     4 */ \"  %s%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|                   && (strneqvcmp(name, pOD->pz_DisableName, nm_len) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|                   )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|->             fprintf(stderr, zambig_file, hyph, pOD->pz_DisableName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|       } while (pOD++, (++idx < opts->optCt));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/find.c",
                    "line": 189,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, SET_OFF_FMT, pOD->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           fprintf(stderr, zDisabledErr, opts->pzProgName, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|           if (pOD->pzText != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|->             fprintf(stderr, SET_OFF_FMT, pOD->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|           fputc(NL, stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|           (*opts->pUsageProc)(opts, EXIT_FAILURE);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/find.c",
                    "line": 402,
                    "column": 37,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    fprintf(stderr, SET_OFF_FMT, pRes->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 180,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_OFF_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 127,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   620 */ \" -- %s\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|                   fprintf(stderr, zDisabledErr, pOpts->pzProgPath, pRes->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                   if (pRes->pzText != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|->                     fprintf(stderr, SET_OFF_FMT, pRes->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|                   fputc(NL, stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|                   (*pOpts->pUsageProc)(pOpts, EXIT_FAILURE);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 114,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 124,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 133,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 152,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 345,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|           fputs(INIT_OPT_STR,     stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|           emit_flag(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|->         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 145,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 151,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "            \"            exit 0\\n\\0\"format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 152,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 345,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|           fputs(INIT_OPT_STR,     stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|           emit_flag(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|->         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 151,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 152,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_ARG_FMT'In file included from libopts.c:34:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|           fputs(INIT_OPT_STR,     stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|           emit_flag(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|->         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 162,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(SHOW_PROG_ENV, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 192,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHOW_PROG_ENV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SHOW_PROG_ENV         (ao_strs_strtable+647)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 131,
                    "column": 33,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"env | grep '^%s_'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 345,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           fputs(script_trailer, stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|       else if (ENABLED_GENSHELL_OPT(SHELL))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|->         printf(SHOW_PROG_ENV, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|   #ifdef HAVE_FCHMOD",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 197,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(SET_TEXT_FMT, prog, var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 182,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_TEXT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_TEXT_FMT          (ao_strs_strtable+627)            \"env | grep '^%s_'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 128,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   627 */ \"%s_%s_TEXT='\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       int    nlct = 0; /* defer newlines and skip trailing ones */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|->     printf(SET_TEXT_FMT, prog, var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|       if (fp == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|           goto skip_text;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 348,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 190,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHELL_MAGIC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SHELL_MAGIC           (ao_strs_strtable+640)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 129,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   640 */ \"#! %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|           if ((script_leader == NULL) && (shell_prog != NULL))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|->             printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|           printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 350,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 168,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PREAMBLE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PREAMBLE_FMT          (ao_strs_strtable+5900)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 351,
                    "column": 49,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#  the text has been generated %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|               printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|->         printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 353,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 64,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_PRE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_PRE_FMT           (ao_strs_strtable+989)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 158,
                    "column": 17,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|->     printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 403,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(FINISH_LOOP, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 78,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'FINISH_LOOP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FINISH_LOOP           (ao_strs_strtable+2039)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 212,
                    "column": 38,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"unset OPT_ARG_VAL || :\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|       char const * fmt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|->     printf(FINISH_LOOP, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|       for (;opt_ct > 0; od++, --opt_ct) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|           /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 499,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "In file included from format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  497|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|       if (od->pOptProc == optionPrintVersion)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|->         printf(ECHO_N_EXIT, opts->pzPROGNAME, VER_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 499,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  497|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|       if (od->pOptProc == optionPrintVersion)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|->         printf(ECHO_N_EXIT, opts->pzPROGNAME, VER_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 502,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 164,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PAGE_USAGE_TEXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PAGE_USAGE_TEXT       (ao_strs_strtable+5826)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 347,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            exit 0\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|->         printf(PAGE_USAGE_TEXT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 502,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|->         printf(PAGE_USAGE_TEXT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 505,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "In file included from         printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|->         printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|           printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 506,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|           printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|->         printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|       } else if (od->pz_NAME == NULL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 511,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|           if (od->pOptProc == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|->             printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 512,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|           if (od->pOptProc == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|               printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|->             printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|               printf(ECHO_N_EXIT, opts->pzPROGNAME, LONG_USE_STR);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 514,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(ECHO_N_EXIT, opts->pzPROGNAME, LONG_USE_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 56,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ECHO_N_EXIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ECHO_N_EXIT           (ao_strs_strtable+1872)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 191,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            exit 0\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|->             printf(ECHO_N_EXIT, opts->pzPROGNAME, LONG_USE_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|       } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 518,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SGL_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 184,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SGL_ARG_FMT           (ao_strs_strtable+6096)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 360,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|           if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518|->             printf(SGL_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|           else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|               if ((unsigned)od->optMaxCt < NOLIMIT)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 521,
                    "column": 24,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                printf(CHK_MAX_COUNT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 50,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'CHK_MAX_COUNT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define CHK_MAX_COUNT         (ao_strs_strtable+1508)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 181,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            fi >&2\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|           else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|               if ((unsigned)od->optMaxCt < NOLIMIT)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|->                 printf(CHK_MAX_COUNT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|                          od->pz_NAME, od->optMaxCt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 524,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 110,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MULTI_ARG_FMT         (ao_strs_strtable+3772)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 264,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|                          od->pz_NAME, od->optMaxCt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|->             printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|           }",
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
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 531,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 176,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|           if (OPTST_GET_ARGTYPE(od->fOptState) == OPARG_TYPE_NONE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|->             printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|               printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 532,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|           if (OPTST_GET_ARGTYPE(od->fOptState) == OPARG_TYPE_NONE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|               printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|->             printf(LVL3_CMD, NO_ARG_NEEDED);",
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
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 535,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 176,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
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
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|->             printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "In file included from libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 536,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|               printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|->             printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|           } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 539,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "./ao-strs.h",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "In file included from             \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, NO_SUPPRESS_LOAD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|->             printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 549,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, NO_SUPPRESS_LOAD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|       if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  549|->         printf(LVL3_CMD, NO_SUPPRESS_LOAD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|       } else if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 552,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(NO_SGL_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 132,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NO_SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "In file included from #define NO_SGL_ARG_FMT        (ao_strs_strtable+4252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 292,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|       } else if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  552|->         printf(NO_SGL_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|       else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 555,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(NO_MULTI_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 128,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NO_MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NO_MULTI_ARG_FMT      (ao_strs_strtable+4111)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 283,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|       else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|->         printf(NO_MULTI_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 558,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|->     printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|       fputs(zOptionEndSelect, stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 581,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(zOptionFlag, od->optValue);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 282,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionFlag'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionFlag           (ao_strs_strtable+907)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 153,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   907 */ \"        '%c' )\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  579|               continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  580|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|->         printf(zOptionFlag, od->optValue);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|           emit_action(opts, od);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 656,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptionPartName, name_bf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 286,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionPartName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionPartName       (ao_strs_strtable+939)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 155,
                    "column": 33,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   939 */ \"        '%s' | \\\\\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|           for (;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|               *pz = NUL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|->             printf(zOptionPartName, name_bf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|               *pz++ = name[nm_ix++];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658|               if (name[nm_ix] == NUL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/makeshell.c",
                    "line": 666,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptionFullName, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 284,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionFullName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionFullName       (ao_strs_strtable+923)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 154,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   923 */ \"        '%s' )\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|   leave:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|->     printf(zOptionFullName, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/nested.c",
                    "line": 895,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, XML_HEX_BYTE_FMT, (ch & 0xFF));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 218,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'XML_HEX_BYTE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define XML_HEX_BYTE_FMT      (ao_strs_strtable+764)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 140,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   764 */ \"#x%02X;\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|           xlatp++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  894|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895|->     fprintf(fp, XML_HEX_BYTE_FMT, (ch & 0xFF));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/pgusage.c",
                    "line": 49,
                    "column": 28,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 204,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'TMP_FILE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define TMP_FILE_FMT          (ao_strs_strtable+721)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 136,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   721 */ \"%s/use-%u.XXXXXX\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|           bfsz = TMP_FILE_FMT_LEN + strlen(tmpdir) + 10;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|           bf   = AGALOC(bfsz, \"tmp fil\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->         snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/pgusage.c",
                    "line": 90,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        snprintf(res, bfsz, PAGE_USAGE_FMT, pager, fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 162,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PAGE_USAGE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PAGE_USAGE_FMT        (ao_strs_strtable+569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 122,
                    "column": 36,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   569 */ \"%1$s %2$s ; rm -f %2$s\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|           bfsz = 2 * strlen(fname) + strlen(pager) + PAGE_USAGE_FMT_LEN;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|           res  = AGALOC(bfsz, \"more cmd\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->         snprintf(res, bfsz, PAGE_USAGE_FMT, pager, fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|           AGFREE(fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|           return res;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 175,
                    "column": 33,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            out += sprintf(out, MK_STR_OCT_FMT, ch);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 106,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'MK_STR_OCT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MK_STR_OCT_FMT        (ao_strs_strtable+441)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 105,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   441 */ \"\\\\%03o\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|                *  the amount of space we will be using.  Assertion is above.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|                */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|->             out += sprintf(out, MK_STR_OCT_FMT, ch);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 261,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 156,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_VAL_FMT           (ao_strs_strtable+552)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 119,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   552 */ \"%s_%s=\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|       uintptr_t e_val = pOD->optArg.argEnum;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|->     printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 267,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "In file included from format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 174,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'QUOT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 126,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   615 */ \"'%s'\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|        */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       (*(pOD->pOptProc))(OPTPROC_RETURN_VALNAME, pOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|->     printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|       if (pOD->fOptState & OPTST_ALLOC_ARG)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|           AGFREE(pOD->optArg.argString);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 267,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 174,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'QUOT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 126,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   615 */ \"'%s'\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|        */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       (*(pOD->pOptProc))(OPTPROC_RETURN_VALNAME, pOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|->     printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|       if (pOD->fOptState & OPTST_ALLOC_ARG)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|           AGFREE(pOD->optArg.argString);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 272,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 154,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_END_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 118,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|       pOD->optArg.argEnum = e_val;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|->     printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 281,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       char const * pz;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|       uintptr_t val = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|->     printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|              (int)(uintptr_t)(pOD->optCookie));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|       pOD->optCookie = VOIDP(~0UL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 299,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(SHOW_VAL_FMT, (unsigned long)val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 194,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHOW_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SHOW_VAL_FMT          (ao_strs_strtable+667)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 204,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'TMP_FILE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define TMP_FILE_FMT          (ao_strs_strtable+721)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 136,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   721 */ \"%s/use-%u.XXXXXX\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|               else fputc('_', stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|           } name_done:;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|->         printf(SHOW_VAL_FMT, (unsigned long)val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|           val <<= 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       }",
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
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 314,
                    "column": 12,
                    "event": "warning",
                    "message": "In file included from libopts.c:37:",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|       int             ct  = pAL->useCt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|->     printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       while (--ct >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 314,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 270,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptCookieCt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptCookieCt          (ao_strs_strtable+1332)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 169,
                    "column": 35,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s_CT\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|       int             ct  = pAL->useCt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|->     printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       while (--ct >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 317,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(ARG_BY_NUM_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 46,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ARG_BY_NUM_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ARG_BY_NUM_FMT        (ao_strs_strtable+286)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 86,
                    "column": 23,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   286 */ \"%s_%s_%d=\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       while (--ct >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->         printf(ARG_BY_NUM_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|                  pAL->useCt - ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|           print_quot_str(*(ppz++));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 320,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(EXPORT_ARG_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 74,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'EXPORT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define EXPORT_ARG_FMT        (ao_strs_strtable+336)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 94,
                    "column": 31,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s_%d\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|                  pAL->useCt - ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|           print_quot_str(*(ppz++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|->         printf(EXPORT_ARG_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|                  pAL->useCt - ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 359,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptCtFmt, pOpts->curOptIdx-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 272,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptCtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptCtFmt             (ao_strs_strtable+1371)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 171,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export OPTION_CT\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|       int  optIx = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|->     printf(zOptCtFmt, pOpts->curOptIdx-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       do  {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 387,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zEquivMode, pOpts->pzPROGNAME, pOD->pz_NAME, p->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 244,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zEquivMode'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zEquivMode            (ao_strs_strtable+1252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 165,
                    "column": 37,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s_MODE\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|               p->fOptState &= OPTST_PERSISTENT_MASK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|               p->fOptState |= pOD->fOptState & ~OPTST_PERSISTENT_MASK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|->             printf(zEquivMode, pOpts->pzPROGNAME, pOD->pz_NAME, p->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|               pOD = p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 424,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptDisabl, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 274,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptDisabl'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptDisabl            (ao_strs_strtable+1402)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 173,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|           if ((pOD->fOptState & OPTST_DISABLED) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|->             printf(zOptDisabl, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|                      (pOD->pz_DisablePfx != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|                      ? pOD->pz_DisablePfx : \"false\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 435,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|           if (OPTST_GET_ARGTYPE(pOD->fOptState) == OPARG_TYPE_NUMERIC) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|->             printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|                      (int)pOD->optArg.argInt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 455,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zFullOptFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 252,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFullOptFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFullOptFmt           (ao_strs_strtable+1297)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 167,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|           if (OPTST_GET_ARGTYPE(pOD->fOptState) == OPARG_TYPE_BOOLEAN) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|->             printf(zFullOptFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|                      (pOD->optArg.argBool == 0) ? \"false\" : \"true\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libopts.cIn file included from libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 467,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|              || (pOD->optArg.argString[0] == NUL) ) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|->             printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|                      pOD->optOccCt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 267,
                    "column": 12,
                    "event": "scope_hint",
                    "message": "In file included from libopts.c:38",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 475,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 156,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_VAL_FMT           (ao_strs_strtable+552)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 119,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   552 */ \"%s_%s=\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|            *  This option has a text value",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|->         printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|           print_quot_str(pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|           printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/putshell.c",
                    "line": 477,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 154,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_END_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 118,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 126,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   615 */ \"'%s'\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|           printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|           print_quot_str(pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|->         printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  478|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479|       } while (++optIx < pOpts->presetOptCt );",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 274,
                    "column": 31,
                    "event": "scope_hint",
                    "message": "In file included from libopts.c:41",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 220,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 173,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|       if (UNUSED_OPT(od) && (save_fl & SVFL_DEFAULT))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|           fputs(ao_default_use, fp);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 302,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NULL_ATR_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 136,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NULL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NULL_ATR_FMT          (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 112,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   498 */ \"<%s/>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|       default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       case OPARG_TYPE_NONE:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|->         fprintf(fp, NULL_ATR_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 317,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, TYPE_ATR_FMT, ovp->pzName, typ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 212,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define TYPE_ATR_FMT          (ao_strs_strtable+743)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 138,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   743 */ \"<%s type=%s>\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|                   ? \"keyword\" : \"set-membership\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->             fprintf(fp, TYPE_ATR_FMT, ovp->pzName, typ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|               /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 337,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, END_XML_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 68,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 90,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   316 */ \"</%s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|               od->optArg.argEnum = val;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|               od->fOptState = opt_state;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->             fprintf(fp, END_XML_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 343,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NUMB_ATR_FMT, ovp->pzName, ovp->v.longVal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 138,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NUMB_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NUMB_ATR_FMT          (ao_strs_strtable+1186)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 162,
                    "column": 49,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*  1186 */ \"<%1$s type=integer>0x%2$lX</%1$s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|       case OPARG_TYPE_NUMERIC:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|->         fprintf(fp, NUMB_ATR_FMT, ovp->pzName, ovp->v.longVal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 347,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, BOOL_ATR_FMT, ovp->pzName,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 48,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'BOOL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define BOOL_ATR_FMT          (ao_strs_strtable+957)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 156,
                    "column": 46,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   957 */ \"<%1$s type=boolean>%2$s</%1$s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|       case OPARG_TYPE_BOOLEAN:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->         fprintf(fp, BOOL_ATR_FMT, ovp->pzName,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|                   ovp->v.boolVal ? \"true\" : \"false\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|           break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 365,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, OPEN_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 148,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPEN_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPEN_XML_FMT          (ao_strs_strtable+525)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 115,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   525 */ \"<%s>\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 252,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFullOptFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|   prt_string(FILE * fp, char const * name, char const * pz)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|->     fprintf(fp, OPEN_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|       for (;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|           int ch = ((int)*(pz++)) & 0xFF;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 393,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, END_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 68,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 90,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   316 */ \"</%s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFullOptFmt           (ao_strs_strtable+1297)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 167,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|       } string_done:;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|->     fprintf(fp, END_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 416,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, OPEN_CLOSE_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 146,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPEN_CLOSE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPEN_CLOSE_FMT        (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 112,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   498 */ \"<%s/>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|       if (opt_ct <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|->         fprintf(fp, OPEN_CLOSE_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 420,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, NESTED_OPT_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 114,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NESTED_OPT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 107,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   452 */ \"<%s type=nested>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|->     fprintf(fp, NESTED_OPT_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|       depth++;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 450,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 471,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NESTED_OPT_FMT, od->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 114,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NESTED_OPT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 107,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   452 */ \"<%s type=nested>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|               continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|->         fprintf(fp, NESTED_OPT_FMT, od->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|           do  {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 585,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 250,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtProg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 47,
                    "column": 29,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    49 */ \"<?program %s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|           if (sbuf.st_size > zPresetFile_LEN) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|               /* non-zero size implies save_fl is non-zero */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|->             fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|               return fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 604,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, zPresetFile, time_str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 288,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zPresetFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zPresetFile           (ao_strs_strtable+115)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 58,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#  %s#\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|           char *  time_str = ctime(&cur_time);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|->         fprintf(fp, zPresetFile, time_str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   #ifdef HAVE_ALLOCATED_CTIME",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|           /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 615,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 250,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtProg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 47,
                    "column": 29,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    49 */ \"<?program %s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|       if (save_fl != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|->         fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|       return fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 646,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, pod->pz_Name, pod->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  644|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  645|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646|->         fprintf(fp, ao_name_use_fmt, pod->pz_Name, pod->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|       if (UNUSED_OPT(pod) && (save_fl & SVFL_DEFAULT))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|           fputs(ao_default_use, fp);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 758,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756|           if (od->optArg.argString == orig) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757|               if (save_fl)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758|->                 fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  759|               return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  760|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/save.c",
                    "line": 765,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|       } else if (save_fl)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   ",
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
                    "file_name": "autogen-5.18.16/autoopts/test/cond-testd/cond.c",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/test/cond-testd/cond.h",
                    "line": 121,
                    "column": 4,
                    "event": "warning[-W#warnings]",
                    "message": "undefining SECOND due to option name conflict",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  warning undefining SECOND due to option name conflict",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/test/time-testd/time.c",
                    "line": 220,
                    "column": 8,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'long'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       OPT_VALUE_TIME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/test/time-testd/time.h",
                    "line": 114,
                    "column": 34,
                    "event": "note",
                    "message": "expanded from macro 'OPT_VALUE_TIME'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_VALUE_TIME           (DESC(TIME).optArg.argInt)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/usage.c",
                    "line": 301,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 248,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 46,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    37 */ \"%%-%ds %%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|           if (do_gnu_usage(opts)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|               flen = setGnuOptFmts(opts, &pOptTitle);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|->             sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|               fputc(NL, option_usage_fp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/libopts.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/usage.c",
                    "line": 306,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 248,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 46,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    37 */ \"%%-%ds %%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|               flen = setStdOptFmts(opts, &pOptTitle);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|->             sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|               /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "autogen-5.18.16/autoopts/usage.c",
                    "line": 386,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, PUTS_FMT, t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.h",
                    "line": 170,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PUTS_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PUTS_FMT              (ao_strs_strtable+596)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/autoopts/ao-strs.c",
                    "line": 124,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   596 */ \"  puts(_(%s));\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    49 */ \"<?program %s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|       else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           char const * t = optionQuoteString(text, LINE_SPLICE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|->         fprintf(fp, PUTS_FMT, t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|           AGFREE(t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "autogen-5.18.16/columns/cols.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/columns/opts.c",
                    "line": 978,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(stderr, OPEN_ERROR_FMT, errno, strerror(errno),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/columns/opts.c",
                    "line": 72,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'OPEN_ERROR_FMT'In file included from ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  976|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  977|       if (fp == (FILE *)NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  978|->         fprintf(stderr, OPEN_ERROR_FMT, errno, strerror(errno),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  979|                   pOptDesc->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  980|           USAGE(EXIT_FAILURE);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 119,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 119,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     printf_function *user_func = (printf_function *) pinfo->extra;",
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
                    "message": "  119|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 119,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 119,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     printf_function *user_func = (printf_function *) pinfo->extra;",
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
                    "message": "  119|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 149,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 149,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|         int padwidth = pinfo->width - len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 149,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 149,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|         int padwidth = pinfo->width - len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 160,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 160,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|         while ((count_or_errorcode >= 0) && *p != '\\0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   \t     && ((pinfo->prec == 0) || (count_or_errorcode - mark < len)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|-> \tSNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 160,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 160,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|         while ((count_or_errorcode >= 0) && *p != '\\0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   \t     && ((pinfo->prec == 0) || (count_or_errorcode - mark < len)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|-> \tSNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 169,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 169,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 6,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 169,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/custom.c",
                    "line": 169,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 1,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/filament.c",
                    "line": 156,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 277,
                    "column": 27,
                    "event": "note",
                    "message": "expanded from macro 'snv_assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_assert(expr)                snv_fassert(stderr, expr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 278,
                    "column": 37,
                    "event": "note",
                    "message": "expanded from macro 'snv_fassert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_fassert(stream, expr)   SNV_STMT_START {        \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/filament.c",
                    "line": 156,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 277,
                    "column": 27,
                    "event": "note",
                    "message": "expanded from macro 'snv_assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_assert(expr)                snv_fassert(stderr, expr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 278,
                    "column": 52,
                    "event": "note",
                    "message": "expanded from macro 'snv_fassert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_fassert(stream, expr)   SNV_STMT_START {        \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|->       snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|         fil->length = len;",
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
                    "file_name": "snv.cIn file included from snv.c",
                    "line": 1,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/filament.c",
                    "line": 156,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 277,
                    "column": 27,
                    "event": "note",
                    "message": "expanded from macro 'snv_assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_assert(expr)                snv_fassert(stderr, expr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 283,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'snv_fassert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/filament.c",
                    "line": 156,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 277,
                    "column": 27,
                    "event": "note",
                    "message": "expanded from macro 'snv_assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define snv_assert(expr)                snv_fassert(stderr, expr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 283,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'snv_fassert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|->       snv_assert (len < fil->size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|         fil->length = len;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 486,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 486,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|   printf_flag_info (struct printf_info *const pinfo, size_t n, int *argtypes)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|     (void)n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|     (void)argtypes;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 486,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 486,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|   printf_flag_info (struct printf_info *const pinfo, size_t n, int *argtypes)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|     (void)n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|     (void)argtypes;",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 562,
                    "column": 3,
                    "event": "warning",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts [-Wcompound-token-split-by-macro]#  define SNV_STMT_END          )",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 562,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|     long value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|     /* If we are looking at a ``.'', then this is a precision parameter. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 562,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 562,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|     long value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|     /* If we are looking at a ``.'', then this is a precision parameter. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 562,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|     long value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|     /* If we are looking at a ``.'', then this is a precision parameter. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 689,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 689,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  687|   printf_modifier_info (struct printf_info *const pinfo, size_t n, int *argtypes)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|     (void)n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|     (void)argtypes;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 689,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  687|   printf_modifier_info (struct printf_info *const pinfo, size_t n, int *argtypes)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|     (void)n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|     (void)argtypes;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 766,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|     unsigned char ch = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|     /* Check for valid pre-state. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 766,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": ":#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 766,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": 25,
                    "line": 0,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|     unsigned char ch = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|     /* Check for valid pre-state. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 766,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "In file included from '}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|     unsigned char ch = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|     /* Check for valid pre-state. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 788,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": 299,
                    "line": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 788,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 788,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 792,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 792,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|     /* Emit the character argument.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|->   SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|     /* Right pad to the width if we still didn't reach the specified",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 788,
                    "column": 2,
                    "event": "scope_hint",
                    "message": "In file included from snv.c:2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 792,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 792,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|     /* Emit the character argument.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|->   SNV_EMIT (ch, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|     /* Right pad to the width if we still didn't reach the specified",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 799,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 799,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 788,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 799,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 799,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 915,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  913|     bool is_negative = false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  914|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  915|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  916|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  917|     /* Check for valid pre-state. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 915,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  913|     bool is_negative = false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  914|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  915|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  916|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  917|     /* Check for valid pre-state. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 999,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|     if (pinfo->pad == ' ' && !pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  999|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1000|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1001|     /* Display any sign character. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 999,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 999,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|     if (pinfo->pad == ' ' && !pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  999|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1000|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1001|     /* Display any sign character. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1005,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "  } SNV_STMT_END'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1003|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1004|         if (is_negative)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|-> \tSNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|         else if (pinfo->showsign)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|   \tSNV_EMIT ('+', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1005,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1005,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1003|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1004|         if (is_negative)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|-> \tSNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|         else if (pinfo->showsign)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|   \tSNV_EMIT ('+', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1005,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1005,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1003|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1004|         if (is_negative)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|-> \tSNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|         else if (pinfo->showsign)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|   \tSNV_EMIT ('+', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1007,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1007,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|   \tSNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|         else if (pinfo->showsign)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|-> \tSNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|         else if (pinfo->space)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|   \tSNV_EMIT (' ', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1007,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1007,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|   \tSNV_EMIT ('-', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|         else if (pinfo->showsign)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|-> \tSNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|         else if (pinfo->space)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|   \tSNV_EMIT (' ', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1009,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1009,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|   \tSNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|         else if (pinfo->space)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|-> \tSNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1010|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1009,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1009,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|   \tSNV_EMIT ('+', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|         else if (pinfo->space)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|-> \tSNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1010|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 999,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1013|     if ((count_or_errorcode >= 0) && (base == 16) && pinfo->alt)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|->       SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|         SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|       }",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1013|     if ((count_or_errorcode >= 0) && (base == 16) && pinfo->alt)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|->       SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|         SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|       }",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1016,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "  SNV_STMT_START { \\'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1016,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|         SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|->       SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1018|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1016,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": 32,
                    "line": 0,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": 1016,
                    "line": 7,
                    "event": "note",
                    "message": "./format.c'{' token is here:",
                    "verbosity_level": 1
                },
                {
                    "file_name": 1079,
                    "line": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|         SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|->       SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1018|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1016,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1016,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1082,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|         SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|->       SNV_EMIT (digits['X' - 'A' + 10], stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1018|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1024,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1024,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1022|     if (pinfo->pad != ' ' && !pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1023|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1024|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|     /* Fill the stream buffer with as many characters from the number",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1024,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (' ', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1022|     if (pinfo->pad != ' ' && !pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1023|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1024|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|     /* Fill the stream buffer with as many characters from the number",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1030,
                    "column": 5,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    SNV_EMIT (*p, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1030,
                    "column": 5,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    SNV_EMIT (*p, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|      */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|     while ((count_or_errorcode >= 0) && (++p < &buffer[sizeof (buffer)]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|->     SNV_EMIT (*p, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|     /* Right pad to the width if we still didn't reach the specified",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1030,
                    "column": 5,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    SNV_EMIT (*p, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1030,
                    "column": 5,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|      */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|     while ((count_or_errorcode >= 0) && (++p < &buffer[sizeof (buffer)]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|->     SNV_EMIT (*p, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|     /* Right pad to the width if we still didn't reach the specified",
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
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1037,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1037,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035|     if (pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1036|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1037|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1038|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1039|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1037,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1037,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035|     if (pinfo->left)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1036|       while ((count_or_errorcode >= 0) && (pinfo->width-- > 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1037|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1038|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1039|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1048,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1048,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046|     int count_or_errorcode = SNV_OK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1047|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1048|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1049|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1050|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1048,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1048,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046|     int count_or_errorcode = SNV_OK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1047|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1048|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1049|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1050|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "warning",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts [-Wcompound-token-split-by-macro]  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1077|         int padwidth = pinfo->width - 5;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1015,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT ('0', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1077|         int padwidth = pinfo->width - 5;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1079,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1077|         int padwidth = pinfo->width - 5;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|-> \tSNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1082,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1082,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|->   SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1082,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1082,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|->   SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1083,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1024,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|     SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|->   SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1083,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1083,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1024,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1084,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|     SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|->   SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1084,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1084,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|     SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|->   SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|     SNV_EMIT (')', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1084,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1084,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|     SNV_EMIT ('(', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|->   SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|     SNV_EMIT (')', stream, count_or_errorcode);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1085,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1085,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|->   SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|     SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1085,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1085,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|     SNV_EMIT ('n', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|->   SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|     SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1086,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1086,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|->   SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|     if ((pinfo->width > 5) && pinfo->left)",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1086,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1086,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is hereIn file included from ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|     SNV_EMIT ('i', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|     SNV_EMIT ('l', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|->   SNV_EMIT (')', stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|     if ((pinfo->width > 5) && pinfo->left)",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1091,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1091,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1092|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1093|     return count_or_errorcode;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1091,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1091,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1092|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1093|     return count_or_errorcode;",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1103,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|     const char *p = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1105|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1103,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1103,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|     const char *p = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|->   return_val_if_fail (pinfo != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1105|     /* Read these now to advance the argument pointer appropriately */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1134,
                    "column": 11,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1134,
                    "column": 11,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|         int padwidth = pinfo->width - (int)len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|->           SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1134,
                    "column": 11,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1134,
                    "column": 11,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|         int padwidth = pinfo->width - (int)len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133|         while ((count_or_errorcode >= 0) && (count_or_errorcode < padwidth))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|->           SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1145,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1145,
                    "column": 2,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1143|               && (  (pinfo->prec == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|                  || (count_or_errorcode - mark < (int)len)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1145|-> \tSNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1145,
                    "column": 2,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1145,
                    "column": 2,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1143|               && (  (pinfo->prec == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|                  || (count_or_errorcode - mark < (int)len)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1145|-> \tSNV_EMIT (*p++, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147|   ",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1153,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1153,
                    "column": 7,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1152|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1154|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1155|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1153,
                    "column": 7,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/format.c",
                    "line": 1153,
                    "column": 7,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|       while ((count_or_errorcode >= 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1152|   \t   && (count_or_errorcode < pinfo->width))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153|->       SNV_EMIT (pinfo->pad, stream, count_or_errorcode);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1154|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1155|     /* Return the number of characters emitted. */",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 377,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 377,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|     struct printf_info info;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->   return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|     parser_init (&info, format, NULL);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 377,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 377,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|     struct printf_info info;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->   return_val_if_fail (format != NULL, (size_t)-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|     parser_init (&info, format, NULL);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 557,
                    "column": 11,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 557,
                    "column": 11,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 249,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  SNV_STMT_START { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|           default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|             /* Just a character: copy it. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|->           SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|             continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|           }",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 557,
                    "column": 11,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 557,
                    "column": 11,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.h",
                    "line": 263,
                    "column": 5,
                    "event": "note",
                    "message": "expanded from macro 'SNV_EMIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|           default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|             /* Just a character: copy it. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|->           SNV_EMIT (ch, stream, info.count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|             continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|           }",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 600,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 600,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|     int *argtypes = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|->   return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|     parser_init (&info, format, NULL);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 600,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 600,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|     int *argtypes = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|->   return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|     parser_init (&info, format, NULL);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 800,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'(' and '{' tokens introducing statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 236,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_START        (void)(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 800,
                    "column": 3,
                    "event": "note",
                    "message": "'{' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 294,
                    "column": 64,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define freturn_val_if_fail(stream, expr, val)  SNV_STMT_START {    \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|     int *argtypes = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|->   return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|     parser_init (&info, format, NULL);",
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
                    "file_name": "autogen-5.18.16/snprintfv/snv.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 800,
                    "column": 3,
                    "event": "warning[-Wcompound-token-split-by-macro]",
                    "message": "'}' and ')' tokens terminating statement expression appear in different macro expansion contexts",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 8,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/printf.c",
                    "line": 800,
                    "column": 3,
                    "event": "note",
                    "message": "')' token is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 293,
                    "column": 39,
                    "event": "note",
                    "message": "expanded from macro 'return_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define return_val_if_fail(expr, val)   freturn_val_if_fail(stderr, expr, val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 299,
                    "column": 10,
                    "event": "note",
                    "message": "expanded from macro 'freturn_val_if_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    }; } SNV_STMT_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/snprintfv/compat.h",
                    "line": 237,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'SNV_STMT_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SNV_STMT_END          )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|     int *argtypes = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|->   return_val_if_fail (format != NULL, SNV_ERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|     parser_init (&info, format, NULL);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
