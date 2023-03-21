{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libproxy-0.4.17-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/symbiotic/output",
        "time-created": "2023-01-29 20:51:51",
        "time-finished": "2023-01-29 20:57:32",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libproxy-0.4.17-3.fc35/libproxy-0.4.17-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libproxy-0.4.17/libmodman/test/main.cpp",
                    "line": 63,
                    "column": 22,
                    "event": "warning[-Wpotentially-evaluated-expression]",
                    "message": "expression with side effects will be evaluated despite being used as an operand to 'typeid'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (!strstr(typeid(*(exts[i])).name(), argv[i+2])) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   \tfor (unsigned int i=0 ; i < exts.size() ; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> \t\tif (!strstr(typeid(*(exts[i])).name(), argv[i+2])) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \t\t\tcout << \"Unable to find extension! Here's the list:\" << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\t\tfor (unsigned int j=0 ; j < exts.size() ; j++)",
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
                    "file_name": "libproxy-0.4.17/libmodman/test/main.cpp",
                    "line": 66,
                    "column": 28,
                    "event": "warning[-Wpotentially-evaluated-expression]",
                    "message": "expression with side effects will be evaluated despite being used as an operand to 'typeid'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                cout << \"\\t\" << typeid(*(exts[j])).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \t\t\tcout << \"Unable to find extension! Here's the list:\" << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\t\tfor (unsigned int j=0 ; j < exts.size() ; j++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|-> \t\t\t\tcout << \"\\t\" << typeid(*(exts[j])).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   \t\t\treturn 5;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   \t\t}",
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
                    "file_name": "libproxy-0.4.17/libproxy/proxy.cpp",
                    "line": 328,
                    "column": 54,
                    "event": "warning[-Wpotentially-evaluated-expression]",
                    "message": "expression with side effects will be evaluated despite being used as an operand to 'typeid'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                if (debug) cerr << \"WPAD search via: \" << typeid(**i).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|   \t\t\tvector<wpad_extension*> wpads = this->mm.get_extensions<wpad_extension>();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|   \t\t\tfor (vector<wpad_extension*>::iterator i=wpads.begin() ; i != wpads.end() ; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|-> \t\t\t\tif (debug) cerr << \"WPAD search via: \" << typeid(**i).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|   \t\t\t\tif ((this->pacurl = (*i)->next(&this->pac))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|   \t\t\t\t\tif (debug) cerr << \"PAC found!\" << endl;",
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
                    "file_name": "libproxy-0.4.17/libproxy/proxy.cpp",
                    "line": 352,
                    "column": 57,
                    "event": "warning[-Wpotentially-evaluated-expression]",
                    "message": "expression with side effects will be evaluated despite being used as an operand to 'typeid'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                        if (debug) cerr << \"WPAD search via: \" << typeid(**i).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|   \t\t\t\t\t\t// Attempt to find a PAC",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|   \t\t\t\t\t\tfor (i=wpads.begin() ; i != wpads.end() ; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|-> \t\t\t\t\t\t\tif (debug) cerr << \"WPAD search via: \" << typeid(**i).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|   \t\t\t\t\t\t\tif ((this->pacurl = (*i)->next(&this->pac))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   \t\t\t\t\t\t\t\tif (debug) cerr << \"PAC found!\" << endl;",
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
                    "file_name": "libproxy-0.4.17/libproxy/proxy.cpp",
                    "line": 418,
                    "column": 52,
                    "event": "warning[-Wpotentially-evaluated-expression]",
                    "message": "expression with side effects will be evaluated despite being used as an operand to 'typeid'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (debug) cerr << \"Using pacrunner: \" << typeid(*pacrunners[0]).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|   \t\t/* Run the PAC, but only try one PACRunner */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|-> \t\tif (debug) cerr << \"Using pacrunner: \" << typeid(*pacrunners[0]).name() << endl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|   \t\tpacrunner* runner = pacrunners[0]->get(this->pac, this->pacurl->to_string());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|   \t\tstring pacresp = runner->run(realurl);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
