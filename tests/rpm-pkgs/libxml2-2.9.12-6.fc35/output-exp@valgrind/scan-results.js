{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libxml2-2.9.12-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxml2-2.9.12-6.fc35/valgrind/output",
        "time-created": "2022-11-23 21:55:29",
        "time-finished": "2022-11-23 22:04:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxml2-2.9.12-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxml2-2.9.12-6.fc35/libxml2-2.9.12-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlPythonFileCloseRaw'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 260,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260 |     ret = PyEval_CallMethod(file, (char *) \"close\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       file = (PyObject *) context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|       if (file == NULL) return(-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|->     ret = PyEval_CallMethod(file, (char *) \"close\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|       if (ret != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   \tPy_DECREF(ret);",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlPythonFileReadRaw'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 290,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290 |     ret = PyEval_CallMethod(file, (char *) \"read\", (char *) \"(i)\", len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|       file = (PyObject *) context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|       if (file == NULL) return(-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|->     ret = PyEval_CallMethod(file, (char *) \"read\", (char *) \"(i)\", len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       if (ret == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|   \tprintf(\"xmlPythonFileReadRaw: result is NULL\\n\");",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlPythonFileRead'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 355,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355 |     ret = PyEval_CallMethod(file, (char *) \"io_read\", (char *) \"(i)\", len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       file = (PyObject *) context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|       if (file == NULL) return(-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|->     ret = PyEval_CallMethod(file, (char *) \"io_read\", (char *) \"(i)\", len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|       if (ret == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|   \tprintf(\"xmlPythonFileRead: result is NULL\\n\");",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlPythonFileWrite'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 423,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423 |         ret = PyEval_CallMethod(file, (char *) \"io_write\", (char *) \"(O)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|       if (string == NULL) return(-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|       if (PyObject_HasAttrString(file, (char *) \"io_write\")) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|->         ret = PyEval_CallMethod(file, (char *) \"io_write\", (char *) \"(O)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|   \t                        string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|       } else if (PyObject_HasAttrString(file, (char *) \"write\")) {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 426,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426 |         ret = PyEval_CallMethod(file, (char *) \"write\", (char *) \"(O)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|   \t                        string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|       } else if (PyObject_HasAttrString(file, (char *) \"write\")) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|->         ret = PyEval_CallMethod(file, (char *) \"write\", (char *) \"(O)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|   \t                        string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|       }",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlPythonFileClose'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 462,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462 |         ret = PyEval_CallMethod(file, (char *) \"io_close\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|       if (file == NULL) return(-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|       if (PyObject_HasAttrString(file, (char *) \"io_close\")) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|->         ret = PyEval_CallMethod(file, (char *) \"io_close\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|       } else if (PyObject_HasAttrString(file, (char *) \"flush\")) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|           ret = PyEval_CallMethod(file, (char *) \"flush\", (char *) \"()\");",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 464,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallMethod' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464 |         ret = PyEval_CallMethod(file, (char *) \"flush\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 28,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallMethod(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|           ret = PyEval_CallMethod(file, (char *) \"io_close\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|       } else if (PyObject_HasAttrString(file, (char *) \"flush\")) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|->         ret = PyEval_CallMethod(file, (char *) \"flush\", (char *) \"()\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|       if (ret != NULL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlErrorFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 1650,
                    "column": 43,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 1 of 'libxml_charPtrConstWrap' differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1650 |         message = libxml_charPtrConstWrap(ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           unsigned char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml_wrap.h",
                    "line": 240,
                    "column": 48,
                    "event": "note",
                    "message": "expected 'const char *' but argument is of type 'unsigned char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240 | PyObject * libxml_charPtrConstWrap(const char *str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1648|           PyTuple_SetItem(list, 0, libxml_xmlPythonErrorFuncCtxt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1649|           Py_XINCREF(libxml_xmlPythonErrorFuncCtxt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1650|->         message = libxml_charPtrConstWrap(ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1651|           PyTuple_SetItem(list, 1, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1652|           result = PyEval_CallObject(libxml_xmlPythonErrorFuncHandler, list);",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 1652,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1652 |         result = PyEval_CallObject(libxml_xmlPythonErrorFuncHandler, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1650|           message = libxml_charPtrConstWrap(ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1651|           PyTuple_SetItem(list, 1, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1652|->         result = PyEval_CallObject(libxml_xmlPythonErrorFuncHandler, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1653|           /* Forget any errors caused in the error handler. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1654|           PyErr_Clear();",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlParserCtxtGenericErrorFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 1742,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742 |     result = PyEval_CallObject(pyCtxt->f, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740|       PyTuple_SetItem(list, 3, Py_None);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741|       Py_INCREF(Py_None);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742|->     result = PyEval_CallObject(pyCtxt->f, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1743|       if (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1744|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlValidCtxtGenericErrorFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 1927,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1927 |     result = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|       PyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1926|       Py_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1927|->     result = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1928|       if (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1929|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlValidCtxtGenericWarningFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 1954,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1954 |     result = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1952|       PyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1953|       Py_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1954|->     result = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1955|       if (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1956|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlTextReaderErrorCallback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 2088,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2088 |     result = PyEval_CallObject(pyCtxt->f, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2086|       PyTuple_SetItem(list, 2, libxml_intWrap(severity));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2087|       PyTuple_SetItem(list, 3, libxml_xmlTextReaderLocatorPtrWrap(locator));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2088|->     result = PyEval_CallObject(pyCtxt->f, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2089|       if (result == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2090|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlXPathFuncCallback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 2283,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2283 |     result = PyEval_CallObject(current_function, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2281|           PyTuple_SetItem(list, i + 1, cur);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2282|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2283|->     result = PyEval_CallObject(current_function, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2284|       Py_DECREF(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2285|   ",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlRelaxNGValidityGenericErrorFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 3185,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3185 |     result = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3183|       PyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3184|       Py_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3185|->     result = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3186|       if (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3187|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlRelaxNGValidityGenericWarningFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 3212,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3212 |     result = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3210|       PyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3211|       Py_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3212|->     result = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3213|       if (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3214|       {",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlSchemaValidityGenericErrorFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 3349,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3349 |         result = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3347|   \tPyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3348|   \tPy_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3349|-> \tresult = PyEval_CallObject(pyCtxt->error, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3350|   \tif (result == NULL) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3351|   \t{",
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
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libxml_xmlSchemaValidityGenericWarningFuncHandler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 3376,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3376 |         result = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/python/libxml.c",
                    "line": 15,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3374|   \tPyTuple_SetItem(list, 1, pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3375|   \tPy_XINCREF(pyCtxt->arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3376|-> \tresult = PyEval_CallObject(pyCtxt->warn, list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3377|   \tif (result == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3378|   \t{",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libxml2-2.9.12/tree.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xmlDOMWrapCloneNode__internal_alias'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/tree.c",
                    "line": 9550,
                    "column": 26,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct xmlNode[0]' is partly outside array bounds of 'unsigned char[96]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9550 |                     clone->parent = parentClone;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/tree.c",
                    "line": 9539,
                    "column": 38,
                    "event": "note",
                    "message": "referencing an object of size 96 allocated by 'void * <T6ad> (size_t)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9539 |                 clone = (xmlNodePtr) xmlMalloc(sizeof(xmlAttr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9548|   \t\t*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9549|   \t\tif (resultClone != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9550|-> \t\t    clone->parent = parentClone;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9551|   \t\t    if (prevClone) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9552|   \t\t\tprevClone->next = clone;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libxml2-2.9.12/tree.c",
                    "line": 9553,
                    "column": 30,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct xmlNode[0]' is partly outside array bounds of 'unsigned char[96]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9553 |                         clone->prev = prevClone;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxml2-2.9.12/tree.c",
                    "line": 9539,
                    "column": 38,
                    "event": "note",
                    "message": "referencing an object of size 96 allocated by 'void * <T6ad> (size_t)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9539 |                 clone = (xmlNodePtr) xmlMalloc(sizeof(xmlAttr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9551|   \t\t    if (prevClone) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9552|   \t\t\tprevClone->next = clone;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9553|-> \t\t\tclone->prev = prevClone;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9554|   \t\t    } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 9555|   \t\t\tparentClone->properties = (xmlAttrPtr) clone;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
