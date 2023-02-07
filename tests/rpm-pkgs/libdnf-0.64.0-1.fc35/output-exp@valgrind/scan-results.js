{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libdnf-0.64.0-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libdnf-0.64.0-1.fc35/valgrind/output",
        "time-created": "2022-11-25 02:12:44",
        "time-finished": "2022-11-25 02:25:56",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libdnf-0.64.0-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libdnf-0.64.0-1.fc35/libdnf-0.64.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_common_types.dir/common_typesPYTHON_wrap.cxx",
                    "line": 2759,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__common_types()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2759 | #  define SWIG_init    PyInit__common_types",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_common_types.dir/common_typesPYTHON_wrap.cxx",
                    "line": 17595,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17595 | SWIG_init(void) {",
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
                    "message": " 2757|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2758|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2759|-> #  define SWIG_init    PyInit__common_types",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2760|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2761|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_conf.dir/confPYTHON_wrap.cxx",
                    "line": 2791,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__conf()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2791 | #  define SWIG_init    PyInit__conf",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_conf.dir/confPYTHON_wrap.cxx",
                    "line": 29529,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "29529 | SWIG_init(void) {",
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
                    "message": " 2789|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2790|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2791|-> #  define SWIG_init    PyInit__conf",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2792|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2793|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_error.dir/errorPYTHON_wrap.cxx",
                    "line": 2709,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__error()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2709 | #  define SWIG_init    PyInit__error",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_error.dir/errorPYTHON_wrap.cxx",
                    "line": 3441,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3441 | SWIG_init(void) {",
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
                    "message": " 2707|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2708|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2709|-> #  define SWIG_init    PyInit__error",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2710|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2711|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At global scope",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 2767,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__module()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2767 | #  define SWIG_init    PyInit__module",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 31725,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "31725 | SWIG_init(void) {",
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
                    "message": " 2765|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2766|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2767|-> #  define SWIG_init    PyInit__module",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2768|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2769|   #else",
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
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'PyObject* _wrap_ModulePackageContainer_getDisabledStreams(PyObject*, PyObject*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 28884,
                    "column": 42,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'std::map<std::__cxx11::basic_string<char>, std::__cxx11::basic_string<char> > libdnf::ModulePackageContainer::getDisabledStreams()' is deprecated: Will be removed after 2019-12-31. Use getDisabledModules() instead.",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28884 |       result = (arg1)->getDisabledStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ~~~~~~~~~~~~~~~~~~~~~~~~~~^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 3378,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/module/ModulePackageContainer.hpp",
                    "line": 251,
                    "column": 40,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251 |     std::map<std::string, std::string> getDisabledStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28882|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28883|       try {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28884|->       result = (arg1)->getDisabledStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28885|       } catch (const libdnf::Error & e) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28886|         PyErr_SetString(libdnf_error, const_cast<char*>(e.what()));",
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
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'PyObject* _wrap_ModulePackageContainer_getResetStreams(PyObject*, PyObject*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 28952,
                    "column": 39,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'std::map<std::__cxx11::basic_string<char>, std::__cxx11::basic_string<char> > libdnf::ModulePackageContainer::getResetStreams()' is deprecated: Will be removed after 2019-12-31. Use getResetModules() instead.",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28952 |       result = (arg1)->getResetStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ~~~~~~~~~~~~~~~~~~~~~~~^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_module.dir/modulePYTHON_wrap.cxx",
                    "line": 3378,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/module/ModulePackageContainer.hpp",
                    "line": 263,
                    "column": 40,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263 |     std::map<std::string, std::string> getResetStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28950|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28951|       try {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28952|->       result = (arg1)->getResetStreams();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28953|       } catch (const libdnf::Error & e) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "28954|         PyErr_SetString(libdnf_error, const_cast<char*>(e.what()));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_repo.dir/repoPYTHON_wrap.cxx",
                    "line": 3166,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__repo()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3166 | #  define SWIG_init    PyInit__repo",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_repo.dir/repoPYTHON_wrap.cxx",
                    "line": 14463,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14463 | SWIG_init(void) {",
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
                    "message": " 3164|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3165|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3166|-> #  define SWIG_init    PyInit__repo",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3167|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3168|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_smartcols.dir/smartcolsPYTHON_wrap.cxx",
                    "line": 2733,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__smartcols()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2733 | #  define SWIG_init    PyInit__smartcols",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_smartcols.dir/smartcolsPYTHON_wrap.cxx",
                    "line": 11386,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11386 | SWIG_init(void) {",
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
                    "message": " 2731|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2732|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2733|-> #  define SWIG_init    PyInit__smartcols",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2734|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2735|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_transaction.dir/transactionPYTHON_wrap.cxx",
                    "line": 2764,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__transaction()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2764 | #  define SWIG_init    PyInit__transaction",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_transaction.dir/transactionPYTHON_wrap.cxx",
                    "line": 20552,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "20552 | SWIG_init(void) {",
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
                    "message": " 2762|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2763|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2764|-> #  define SWIG_init    PyInit__transaction",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2765|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2766|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_utils.dir/utilsPYTHON_wrap.cxx",
                    "line": 3127,
                    "column": 24,
                    "event": "warning[-Wmissing-declarations]",
                    "message": "no previous declaration for 'PyObject* PyInit__utils()'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3127 | #  define SWIG_init    PyInit__utils",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/build-py3/bindings/python/CMakeFiles/_utils.dir/utilsPYTHON_wrap.cxx",
                    "line": 6836,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'SWIG_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6836 | SWIG_init(void) {",
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
                    "message": " 3125|     ------------------------------------------------*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3126|   #if PY_VERSION_HEX >= 0x03000000",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3127|-> #  define SWIG_init    PyInit__utils",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3128|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3129|   #else",
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
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gboolean dnf_keyring_add_public_key(rpmKeyring, const gchar*, GError**)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 120,
                    "column": 23,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'pgpDig_s* rpmPubkeyDig(rpmPubkey)' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120 |     dig = rpmPubkeyDig(pubkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/rpm/rpmkeyring.h",
                    "line": 109,
                    "column": 8,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109 | pgpDig rpmPubkeyDig(rpmPubkey key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~~~~",
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
                    "message": "  119|       /* does the key exist in the keyring */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|->     dig = rpmPubkeyDig(pubkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       rc = rpmKeyringLookup(keyring, dig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       if (rc == RPMRC_OK) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 121,
                    "column": 26,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'rpmRC rpmKeyringLookup(rpmKeyring, pgpDig)' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121 |     rc = rpmKeyringLookup(keyring, dig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/rpm/rpmkeyring.h",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | rpmRC rpmKeyringLookup(rpmKeyring keyring, pgpDig sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       /* does the key exist in the keyring */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       dig = rpmPubkeyDig(pubkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|->     rc = rpmKeyringLookup(keyring, dig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       if (rc == RPMRC_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|           ret = TRUE;",
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
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gboolean dnf_keyring_check_untrusted_file(rpmKeyring, const gchar*, GError**)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 351,
                    "column": 26,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'rpmRC rpmKeyringLookup(rpmKeyring, pgpDig)' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351 |     rc = rpmKeyringLookup(keyring, dig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-keyring.cpp",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/rpm/rpmkeyring.h",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | rpmRC rpmKeyringLookup(rpmKeyring keyring, pgpDig sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~",
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
                    "message": "  350|       /* does the key exist in the keyring */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|->     rc = rpmKeyringLookup(keyring, dig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|       if (rc != RPMRC_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|           g_set_error(error,",
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
                    "file_name": "libdnf-0.64.0/libdnf/hy-package.cpp",
                    "line": 58,
                    "column": 3,
                    "event": "warning[-Wodr]",
                    "message": "type 'struct DnfPackagePrivate' violates the C++ One Definition Rule",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58 | } DnfPackagePrivate;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/dnf-package.cpp",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "a different type is defined in another translation unit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62 | } DnfPackagePrivate;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/hy-package.cpp",
                    "line": 55,
                    "column": 22,
                    "event": "note",
                    "message": "the first difference of corresponding definitions is field 'loaded'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55 |     gboolean         loaded;",
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
                    "file_name": "libdnf-0.64.0/libdnf/dnf-package.cpp",
                    "line": 54,
                    "column": 22,
                    "event": "note",
                    "message": "a field with different name is defined in another translation unit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 |     char            *checksum_str;",
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
                    "message": "   56|       Id               id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|       DnfSack         *sack;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|-> } DnfPackagePrivate;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   G_DEFINE_TYPE_WITH_PRIVATE(DnfPackage, dnf_package, G_TYPE_OBJECT)",
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
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In constructor 'SHA1Hash::SHA1Hash()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 12,
                    "column": 22,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int EVP_DigestInit_ex(EVP_MD_CTX*, const EVP_MD*, ENGINE*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12 |     EVP_DigestInit_ex(md_ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|       md_ctx = EVP_MD_CTX_new();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12|->     EVP_DigestInit_ex(md_ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|   ",
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
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void SHA1Hash::update(const char*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 19,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int EVP_DigestUpdate(EVP_MD_CTX*, const void*, size_t)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 |     EVP_DigestUpdate(md_ctx, data, strlen(data));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|   SHA1Hash::update(const char * data)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19|->     EVP_DigestUpdate(md_ctx, data, strlen(data));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   ",
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
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'std::string SHA1Hash::hexdigest()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/libdnf/utils/crypto/sha1.cpp",
                    "line": 27,
                    "column": 23,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int EVP_DigestFinal_ex(EVP_MD_CTX*, unsigned char*, unsigned int*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27 |     EVP_DigestFinal_ex(md_ctx, md, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|       unsigned char md[digestLength];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|->     EVP_DigestFinal_ex(md_ctx, md, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|       std::stringstream ss;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 21,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'DnfPackage* get_latest_pkg(DnfSack*, const char*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 53,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53 |                 \"get_latest_pkg() failed finding '%s'.\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|       GPtrArray *plist = hy_query_run(q);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|       fail_unless(plist->len == 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->                 \"get_latest_pkg() failed finding '%s'.\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|       auto pkg = static_cast<DnfPackage *>(g_object_ref(g_ptr_array_index(plist, 0)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       hy_query_free(q);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 438,
                    "column": 18,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438 |             fail(\"assert_list_names(): list too short\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|       while ((name = va_arg(names, char *)) != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|           if (i++ >= count) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|->             fail(\"assert_list_names(): list too short\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|           bool found = false;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 448,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |             fail_unless(false, \"assert_list_names(): element '%s' %sfound '%zu'\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|           if ((wanted && !found) || (!wanted && found)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|->             fail_unless(false, \"assert_list_names(): element '%s' %sfound '%zu'\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|                           name, wanted ? \"not \": \"\", stringVector.size());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libdnf-0.64.0/tests/hawkey/test_goal.cpp",
                    "line": 457,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457 |         fail_unless(i == count, \"assert_list_names(): too many items in the list (%d vs %d)\", i, count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|       // already checked above.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|       if (wanted) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|->         fail_unless(i == count, \"assert_list_names(): too many items in the list (%d vs %d)\", i, count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|       va_end(names);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
