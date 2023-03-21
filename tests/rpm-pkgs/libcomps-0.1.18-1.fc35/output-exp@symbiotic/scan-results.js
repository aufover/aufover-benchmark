{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libcomps-0.1.18-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/symbiotic/output",
        "time-created": "2023-02-07 04:41:12",
        "time-finished": "2023-02-07 04:47:34",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/libcomps-0.1.18-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_log_codes.c",
                    "line": 6,
                    "column": 20,
                    "event": "warning[-Wvarargs]",
                    "message": "passing an object that undergoes default argument promotion to 'va_start' has undefined behavior",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    va_start(list, out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_log_codes.c",
                    "line": 3,
                    "column": 55,
                    "event": "note",
                    "message": "parameter of type 'char' is declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "inline void __expand(char *str, const char *fmt, char out, ...) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    4|       va_list list;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    5|       (void) str;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    6|->     va_start(list, out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    7|       if (out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8|           vprintf(fmt, list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.c",
                    "line": 58,
                    "column": 9,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function 'PyType_HasFeature' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/unicodeobject.h",
                    "line": 115,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'PyUnicode_Check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 PyType_FastSubclass(Py_TYPE(op), Py_TPFLAGS_UNICODE_SUBCLASS)",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 734,
                    "column": 41,
                    "event": "note",
                    "message": "expanded from macro 'PyType_FastSubclass'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PyType_FastSubclass(type, flag) PyType_HasFeature(type, flag)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.h",
                    "line": 34,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function 'list_getitem_byid' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* list_getitem_byid(PyObject *self, PyObject *id);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 722,
                    "column": 1,
                    "event": "note",
                    "message": "'PyType_HasFeature' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyType_HasFeature(PyTypeObject *type, unsigned long feature)",
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
                    "message": "   56|       COMPS_Object *tmpstr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->     if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|           if (__pycomps_stringable_to_char(id, &strid)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|               printf(\"stringable to char fail\\n\");",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.c",
                    "line": 63,
                    "column": 16,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function 'PyType_HasFeature' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    } else if (PyBytes_Check(id)){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/bytesobject.h",
                    "line": 31,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'PyBytes_Check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 PyType_FastSubclass(Py_TYPE(op), Py_TPFLAGS_BYTES_SUBCLASS)",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 734,
                    "column": 41,
                    "event": "note",
                    "message": "expanded from macro 'PyType_FastSubclass'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PyType_FastSubclass(type, flag) PyType_HasFeature(type, flag)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.h",
                    "line": 34,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function 'list_getitem_byid' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* list_getitem_byid(PyObject *self, PyObject *id);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 722,
                    "column": 1,
                    "event": "note",
                    "message": "'PyType_HasFeature' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyType_HasFeature(PyTypeObject *type, unsigned long feature)",
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
                    "message": "   61|               return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->     } else if (PyBytes_Check(id)){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           strid = PyBytes_AsString(id);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       }",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.c",
                    "line": 85,
                    "column": 9,
                    "event": "warning",
                    "message": "static function 'PyType_HasFeature' is used in an inline function with external linkage [-Wstatic-in-inline]#define PyType_FastSubclass(type, flag) PyType_HasFeature(type, flag)",
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
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/unicodeobject.h",
                    "line": 115,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'PyUnicode_Check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 PyType_FastSubclass(Py_TYPE(op), Py_TPFLAGS_UNICODE_SUBCLASS)",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 734,
                    "column": 41,
                    "event": "note",
                    "message": "expanded from macro 'PyType_FastSubclass'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.h",
                    "line": 34,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function 'list_getitem_byid' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PyType_FastSubclass(type, flag) PyType_HasFeature(type, flag)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* list_getitem_byid(PyObject *self, PyObject *id);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 722,
                    "column": 1,
                    "event": "note",
                    "message": "'PyType_HasFeature' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyType_HasFeature(PyTypeObject *type, unsigned long feature)",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.h",
                    "line": 34,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function 'list_getitem_byid' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* list_getitem_byid(PyObject *self, PyObject *id);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 722,
                    "column": 1,
                    "event": "note",
                    "message": "'PyType_HasFeature' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyType_HasFeature(PyTypeObject *type, unsigned long feature)",
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
                    "message": "   83|           PyErr_Format(PyExc_KeyError, \"Object with id '%s' is not in list\", strid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|->     if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           free(strid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|       }",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.c",
                    "line": 85,
                    "column": 9,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function 'PyType_HasFeature' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/unicodeobject.h",
                    "line": 115,
                    "column": 18,
                    "event": "note",
                    "message": "expanded from macro 'PyUnicode_Check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 PyType_FastSubclass(Py_TYPE(op), Py_TPFLAGS_UNICODE_SUBCLASS)",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 734,
                    "column": 41,
                    "event": "note",
                    "message": "expanded from macro 'PyType_FastSubclass'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PyType_FastSubclass(type, flag) PyType_HasFeature(type, flag)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.h",
                    "line": 34,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function 'list_getitem_byid' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* list_getitem_byid(PyObject *self, PyObject *id);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 722,
                    "column": 1,
                    "event": "note",
                    "message": "'PyType_HasFeature' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyType_HasFeature(PyTypeObject *type, unsigned long feature)",
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
                    "message": "   83|           PyErr_Format(PyExc_KeyError, \"Object with id '%s' is not in list\", strid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|->     if (PyUnicode_Check(id)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           free(strid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|       }",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 67,
                    "column": 9,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_NewRef' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        Py_RETURN_NONE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 613,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'Py_RETURN_NONE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_RETURN_NONE return Py_NewRef(Py_None)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 595,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'Py_NewRef'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_NewRef(obj) _Py_NewRef(_PyObject_CAST(obj))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 123,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_str_getter' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* __pycomps_str_getter(char * prop);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 580,
                    "column": 25,
                    "event": "note",
                    "message": "'_Py_NewRef' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline PyObject* _Py_NewRef(PyObject *obj)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   inline PyObject* __pycomps_str_getter(char * prop){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|       if (prop == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|->         Py_RETURN_NONE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       return PyUnicode_FromString(prop);",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 90,
                    "column": 9,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_INCREF' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        Py_INCREF(tmp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 475,
                    "column": 23,
                    "event": "note",
                    "message": "expanded from macro 'Py_INCREF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_INCREF(op) _Py_INCREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 127,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_arg_to_unicode' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "PyObject* __pycomps_arg_to_unicode(PyObject *o);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 461,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_INCREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_INCREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       if (o == Py_None) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|           tmp = Py_None;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->         Py_INCREF(tmp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|           tmp = PyUnicode_FromObject(o);",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 127,
                    "column": 9,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_XDECREF' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        Py_XDECREF(o);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 571,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'Py_XDECREF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_XDECREF(op) _Py_XDECREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 131,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_PyUnicode_AsString' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "signed char __pycomps_PyUnicode_AsString(PyObject *val, char **ret);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_XDECREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_XDECREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|           *ret = malloc(sizeof(char) * (strlen(tmp)+1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|           memcpy(*ret, tmp, sizeof(char) * (strlen(tmp)+1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->         Py_XDECREF(o);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|       if (*ret == NULL) {",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 146,
                    "column": 5,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_XDECREF' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 571,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'Py_XDECREF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_XDECREF(op) _Py_XDECREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 130,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_stringable_to_char' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "signed char __pycomps_stringable_to_char(PyObject *value, char ** ret);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_XDECREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_XDECREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|       retval = __pycomps_PyUnicode_AsString(tmpo, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|->     Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|       return retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   }",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 164,
                    "column": 5,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_XDECREF' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 571,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'Py_XDECREF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_XDECREF(op) _Py_XDECREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 129,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_arg_to_char' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "signed char __pycomps_arg_to_char(PyObject *value, char ** ret);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_XDECREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_XDECREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|       retval = __pycomps_PyUnicode_AsString(tmpo, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|->     Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|       return retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   }",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c/builddir/build/BUILD/libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.c",
                    "line": 164,
                    "column": 5,
                    "event": "warning[-Wstatic-in-inline]",
                    "message": "static function '_Py_XDECREF' is used in an inline function with external linkage",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 571,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'Py_XDECREF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_XDECREF(op) _Py_XDECREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    Py_XDECREF(tmpo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_XDECREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define Py_XDECREF(op) _Py_XDECREF(_PyObject_CAST(op))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_XDECREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_utils.h",
                    "line": 129,
                    "column": 1,
                    "event": "note",
                    "message": "use 'static' to give inline function '__pycomps_arg_to_char' internal linkage",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "signed char __pycomps_arg_to_char(PyObject *value, char ** ret);",
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
                    "file_name": "/usr/include/python3.10/object.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "'_Py_XDECREF' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline void _Py_XDECREF(PyObject *op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 102,
                    "column": 58,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                   ~~    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|       tmplist = comps_docgroup_get_packages(g, NULL, COMPS_PACKAGE_OPTIONAL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->                                \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       tmplist = comps_docgroup_get_packages(g, NULL, COMPS_PACKAGE_MANDATORY);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 106,
                    "column": 58,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                   ~~    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       tmplist = comps_docgroup_get_packages(g, NULL, COMPS_PACKAGE_MANDATORY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->                                \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|       COMPS_OBJECT_DESTROY(doc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 280,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|       g = comps_docgroup_union(g1, g2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       fail_if(g->packages->len != 14, \"Union of (g1 v g2) should have 14 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|->             \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|       COMPS_OBJECT_DESTROY(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|       g = comps_docgroup_intersect(g1, g2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 284,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|       g = comps_docgroup_intersect(g1, g2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|       fail_if(g->packages->len != 2, \"Intersect of (g1 ^ g2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|->             \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|       COMPS_OBJECT_DESTROY(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|       g1 = (COMPS_DocGroup*)list->first->next->comps_obj;",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 290,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|       g = comps_docgroup_union(g1, g2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|       fail_if(g->packages->len != 16, \"Union of (g2 v g3) should have 16 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|->             \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       COMPS_OBJECT_DESTROY(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|       g = comps_docgroup_intersect(g1, g2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 294,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|       g = comps_docgroup_intersect(g1, g2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       fail_if(g->packages->len != 0, \"Intersect of (g2 ^ g3) should have 0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|->             \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       COMPS_OBJECT_DESTROY(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 304,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|       //print_category(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|       fail_if(c->group_ids->len != 4, \"Union of (c1 v c2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|->             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|       COMPS_OBJECT_DESTROY(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   ",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 309,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|       c = comps_doccategory_intersect(c1, c2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|       fail_if(c->group_ids->len != 2, \"Intersect of (c1 ^ c2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|->             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|       COMPS_OBJECT_DESTROY(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|   ",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 316,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|       c = comps_doccategory_union(c1, c2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|       fail_if(c->group_ids->len != 4, \"Union of (c2 v c3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|->             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|       COMPS_OBJECT_DESTROY(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|       c = comps_doccategory_intersect(c1, c2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 320,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|       c = comps_doccategory_intersect(c1, c2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|       fail_if(c->group_ids->len != 2, \"Intersect of (c2 ^ c3) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|->             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|       COMPS_OBJECT_DESTROY(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 329,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|       e = comps_docenv_union(e1, e2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|       fail_if(e->group_list->len != 4, \"Union of (e1 v e2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|->             \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|       fail_if(e->option_list->len != 7, \"Union of (e1 v e2) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|               \"option ids have %d\", e->option_list->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 331,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|       fail_if(e->option_list->len != 7, \"Union of (e1 v e2) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|->             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|       COMPS_OBJECT_DESTROY(e);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|       e = comps_docenv_intersect(e1, e2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 335,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|       e = comps_docenv_intersect(e1, e2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|       fail_if(e->group_list->len != 2, \"Intersect of (e1 ^ e2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|->             \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       fail_if(e->option_list->len != 1, \"Union of (e1 v e2) should have 1 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|               \"option ids have %d\", e->option_list->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 337,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|               \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       fail_if(e->option_list->len != 1, \"Union of (e1 v e2) should have 1 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|       COMPS_OBJECT_DESTROY(e);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 344,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|       e = comps_docenv_union(e1, e2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|       fail_if(e->group_list->len != 4, \"Union of (e2 v e3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|->             \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       fail_if(e->option_list->len != 6, \"Union of (e2 v e3) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|               \"option ids have %d\", e->option_list->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 346,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       fail_if(e->option_list->len != 6, \"Union of (e2 v e3) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|->             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|       COMPS_OBJECT_DESTROY(e);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       e = comps_docenv_intersect(e1, e2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 350,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       e = comps_docenv_intersect(e1, e2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|       fail_if(e->group_list->len != 2, \"Intersect of (e2 ^ e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|->             \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       fail_if(e->option_list->len != 2, \"Intersect of (e2 v e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|               \"option ids have %d\", e->option_list->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 352,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ~~   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|               \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       fail_if(e->option_list->len != 2, \"Intersect of (e2 v e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|->             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       COMPS_OBJECT_DESTROY(e);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 359,
                    "column": 32,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|       list = comps_doc_groups(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|       fail_if(list->len != 6, \"Union of (doc ^ doc2) should have 6 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|->             \"groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       list = comps_doc_categories(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 363,
                    "column": 50,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"should have 4 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       list = comps_doc_categories(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|       fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|->             \"should have 4 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       list = comps_doc_environments(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 367,
                    "column": 52,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"should have 4 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                              ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       list = comps_doc_environments(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|       fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|->             \"should have 4 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|       COMPS_OBJECT_DESTROY(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 373,
                    "column": 46,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"should have 2 groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       list = comps_doc_groups(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|       fail_if(list->len != 2, \"Intersect of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|->             \"should have 2 groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|       list = comps_doc_categories(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 377,
                    "column": 51,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \" should have 2 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                             ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|       list = comps_doc_categories(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|       fail_if(list->len != 2, \"Intersect of (doc ^ doc2)\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->             \" should have 2 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       list = comps_doc_environments(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 381,
                    "column": 65,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"(doc ^ doc2) should have 2 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                           ~~   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       list = comps_doc_environments(tmpdoc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|       fail_if(list->len != 2, \"Intersect of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|->             \"(doc ^ doc2) should have 2 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       COMPS_OBJECT_DESTROY(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|       COMPS_OBJECT_DESTROY(tmpdoc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 90,
                    "column": 24,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 541,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'ck_assert_msg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       tmplist = comps_doc_groups(parsed->comps_doc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       ck_assert_msg(tmplist->len == 3, \"Should have 3 groups parsed.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->             \"Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|       tmplist = comps_doc_categories(parsed->comps_doc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 94,
                    "column": 32,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ~~   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 541,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'ck_assert_msg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|       tmplist = comps_doc_categories(parsed->comps_doc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|       ck_assert_msg(tmplist->len == 2, \"Should have 2 categories\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|->             \"parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|       tmplist = comps_doc_environments(parsed->comps_doc);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 98,
                    "column": 58,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"Should have 1 environment parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                    ~~   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|       tmplist = comps_doc_environments(parsed->comps_doc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       fail_if(tmplist->len != 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|->             \"Should have 1 environment parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 133,
                    "column": 38,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integers of different signs: 'const int' and 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fail_if(group_packages[i][0] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ~~~~~~~~~~~~~~~~~~~~ ^  ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 485,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  (expr) ? \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|           tmplist = comps_docgroup_get_packages((COMPS_DocGroup*)tmpobj2, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|                                                COMPS_PACKAGE_DEFAULT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|->         fail_if(group_packages[i][0] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|                   \" %d default packages, Have %d\", i, group_packages[i][0],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|                   tmplist->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 135,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                tmplist->len);",
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
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|           fail_if(group_packages[i][0] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|                   \" %d default packages, Have %d\", i, group_packages[i][0],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|->                 tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|           COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|           tmplist = comps_docgroup_get_packages((COMPS_DocGroup*)tmpobj2, NULL,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 139,
                    "column": 38,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integers of different signs: 'const int' and 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fail_if(group_packages[i][1] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ~~~~~~~~~~~~~~~~~~~~ ^  ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 485,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  (expr) ? \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|           tmplist = comps_docgroup_get_packages((COMPS_DocGroup*)tmpobj2, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|                                                COMPS_PACKAGE_OPTIONAL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|->         fail_if(group_packages[i][1] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|                   \" %d optional packages, Have %d\", i, group_packages[i][1],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|                   tmplist->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 141,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                tmplist->len);",
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
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|           fail_if(group_packages[i][1] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|                   \" %d optional packages, Have %d\", i, group_packages[i][1],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->                 tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|       }",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 151,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        i, cats_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|           fail_if(strcmp(tmpstr, cats_ids[i]) != 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|                          \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|->                         i, cats_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           free(tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|           COMPS_OBJECT_DESTROY(tmpobj);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 159,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        i, cats_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 78,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|           fail_if(strcmp(tmpstr, cats_names[i]) != 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|                          \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|->                         i, cats_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           free(tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|           COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 163,
                    "column": 63,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integers of different signs: 'size_t' (aka 'unsigned long') and 'const int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ^  ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 485,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  (expr) ? \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|           COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|->         fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|                   \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|                   cats_gids[i], ((COMPS_DocCategory*)tmpobj2)->group_ids->len);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 165,
                    "column": 31,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|           fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|                   \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|->                 cats_gids[i], ((COMPS_DocCategory*)tmpobj2)->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|           COMPS_OBJECT_DESTROY(tmpobj2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|           COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 344,
                    "column": 5,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_if(tmpobj, \"%d. category should have NULL id\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 91,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ~~~~~~~~~~~  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/clang/13.0.1/include/stddef.h",
                    "line": 89,
                    "column": 16,
                    "event": "note",
                    "message": "expanded from macro 'NULL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define NULL ((void*)0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|       tmpobj = comps_docgroup_get_id((COMPS_DocGroup*)it->comps_obj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|->     fail_if(tmpobj, \"%d. category should have NULL id\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|       tmpobj = comps_docgroup_get_name((COMPS_DocGroup*)it->comps_obj);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 347,
                    "column": 5,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_if(tmpobj, \"%d. category should have NULL name\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 91,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ~~~~~~~~~~~  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/clang/13.0.1/include/stddef.h",
                    "line": 89,
                    "column": 16,
                    "event": "note",
                    "message": "expanded from macro 'NULL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define NULL ((void*)0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|       tmpobj = comps_docgroup_get_name((COMPS_DocGroup*)it->comps_obj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->     fail_if(tmpobj, \"%d. category should have NULL name\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|       tmpobj = comps_docgroup_get_desc((COMPS_DocGroup*)it->comps_obj);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 350,
                    "column": 5,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_if(tmpobj, \"%d. category should have NULL description\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 486,
                    "column": 91,
                    "event": "note",
                    "message": "expanded from macro 'fail_if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     _ck_assert_failed(__FILE__, __LINE__, \"Failure '\"#expr\"' occurred\" , ## __VA_ARGS__, NULL) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                             ~~~~~~~~~~~  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/clang/13.0.1/include/stddef.h",
                    "line": 89,
                    "column": 16,
                    "event": "note",
                    "message": "expanded from macro 'NULL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define NULL ((void*)0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|       tmpobj = comps_docgroup_get_desc((COMPS_DocGroup*)it->comps_obj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|->     fail_if(tmpobj, \"%d. category should have NULL description\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       COMPS_OBJECT_DESTROY(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|       comps_parse_parsed_destroy(parsed);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 588,
                    "column": 11,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "incompatible pointer types assigning to 'COMPS_DocGroup *' from 'COMPS_DocCategory *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        g = (COMPS_DocCategory*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|       ck_assert(list->len == 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|       for (it = list->first, x=0; it != NULL; it = it->next, x++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|->         g = (COMPS_DocCategory*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|           str = (COMPS_Str*)comps_doccategory_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|           ck_assert_msg(strcmp(str->val, cats[0][x]) == 0, \"%s != %s\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 589,
                    "column": 52,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "incompatible pointer types passing 'COMPS_DocGroup *' to parameter of type 'COMPS_DocCategory *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        str = (COMPS_Str*)comps_doccategory_get_id(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_doccategory.h",
                    "line": 110,
                    "column": 24,
                    "event": "note",
                    "message": "passing argument to parameter 'category' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "HEAD_COMPS_PROP_GETTER(category, COMPS_DocCategory, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": 24,
                    "line": 0,
                    "event": "note",
                    "message": "passing argument to parameter 'category' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "HEAD_COMPS_PROP_GETTER(env, COMPS_DocEnv, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "HEAD_COMPS_PROP_GETTER(category, COMPS_DocCategory, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|       for (it = list->first, x=0; it != NULL; it = it->next, x++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|           g = (COMPS_DocCategory*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|->         str = (COMPS_Str*)comps_doccategory_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|           ck_assert_msg(strcmp(str->val, cats[0][x]) == 0, \"%s != %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|                         str->val, cats[0][x]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 608,
                    "column": 11,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "incompatible pointer types assigning to 'COMPS_DocGroup *' from 'COMPS_DocEnv *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        g = (COMPS_DocEnv*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|       ck_assert(list->len == 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       for (it = list->first, x=0; it != NULL; it = it->next, x++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|->         g = (COMPS_DocEnv*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|           str = (COMPS_Str*)comps_docenv_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|           ck_assert_msg(strcmp(str->val, envs[0][x]) == 0, \"%s != %s\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 609,
                    "column": 47,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "incompatible pointer types passing 'COMPS_DocGroup *' to parameter of type 'COMPS_DocEnv *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        str = (COMPS_Str*)comps_docenv_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_docenv.h",
                    "line": 92,
                    "column": 24,
                    "event": "note",
                    "message": "passing argument to parameter 'env' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "HEAD_COMPS_PROP_GETTER(env, COMPS_DocEnv, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       for (it = list->first, x=0; it != NULL; it = it->next, x++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|           g = (COMPS_DocEnv*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|->         str = (COMPS_Str*)comps_docenv_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|           ck_assert_msg(strcmp(str->val, envs[0][x]) == 0, \"%s != %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|                         str->val, envs[0][x]);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
