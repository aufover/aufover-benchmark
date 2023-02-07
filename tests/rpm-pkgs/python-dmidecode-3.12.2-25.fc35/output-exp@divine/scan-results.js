{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "python-dmidecode-3.12.2-25.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/divine/output",
        "time-created": "2023-01-26 06:07:40",
        "time-finished": "2023-01-26 06:12:26",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/python-dmidecode-3.12.2-25.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecode.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dmi_additional_info’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecode.c",
                    "line": 3907,
                    "column": 42,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable ‘str_n’ set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3907 |                 xmlNode *data_n = NULL, *str_n = NULL, *val_n = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecode.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3905|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3906|           for(i = 0; i < count; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3907|->                 xmlNode *data_n = NULL, *str_n = NULL, *val_n = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3908|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3909|                   /* Check for short entries */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dmidecode_get_section’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 486,
                    "column": 25,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards ‘const’ qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486 |                 section = PyUnicode_AsUTF8(args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|           char *section = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|           if (PyUnicode_Check(args)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|->                 section = PyUnicode_AsUTF8(args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|           } else if (PyBytes_Check(args)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|                   section = PyBytes_AsString(args);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dmidecode_set_dev’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 617,
                    "column": 19,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards ‘const’ qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617 |                 f = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|           char *f = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|           if(PyUnicode_Check(arg)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|->                 f = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|           } else if(PyBytes_Check(arg)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|                   f = PyBytes_AsString(arg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dmidecode_set_pythonxmlmap’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 665,
                    "column": 23,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards ‘const’ qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665 |                 fname = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  663|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664|           if (PyUnicode_Check(arg)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|->                 fname = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|           } else if (PyBytes_Check(arg)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|                   fname = PyBytes_AsString(arg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 740,
                    "column": 28,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "initialization of ‘PyObject * (*)(PyObject *, PyObject *)’ {aka ‘struct _object * (*)(struct _object *, struct _object *)’} from incompatible pointer type ‘PyObject * (*)(PyObject *, PyObject *, PyObject *)’ {aka ‘struct _object * (*)(struct _object *, struct _object *, struct _object *)’}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740 |         {(char *)\"xmlapi\", dmidecode_xmlapi, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 740,
                    "column": 28,
                    "event": "note",
                    "message": "(near initialization for ‘DMIDataMethods[16].ml_meth’)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738|            (char *) \"Use another python dict map definition. The default file is \" PYTHON_XML_MAP},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  739|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|->         {(char *)\"xmlapi\", dmidecode_xmlapi, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  741|            (char *) \"Internal API for retrieving data as raw XML data\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘PyInit_dmidecodemod’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 846,
                    "column": 72,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "passing argument 3 of ‘PyCapsule_New’ from incompatible pointer type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  846 |         PyModule_AddObject(module, \"options\", PyCapsule_New(opt, NULL, destruct_options));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                        ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                        void (*)(void *)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 102,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/pycapsule.h",
                    "line": 31,
                    "column": 26,
                    "event": "note",
                    "message": "expected ‘PyCapsule_Destructor’ {aka ‘void (*)(struct _object *)’} but argument is of type ‘void (*)(void *)’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31 |     PyCapsule_Destructor destructor);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  844|           // clean up the memory for us.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  845|           // TODO: destructor has wrong type under py3?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  846|->         PyModule_AddObject(module, \"options\", PyCapsule_New(opt, NULL, destruct_options));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  847|           global_options = opt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  848|   #ifdef IS_PY3K",
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
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dmixml_buildstr’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.c",
                    "line": 68,
                    "column": 33,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 3 of ‘xmlStrVPrintf’ differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68 |         xmlStrVPrintf(ret, len, xmlfmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 xmlChar * {aka unsigned char *}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/libxml2/libxml/tree.h",
                    "line": 18,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.c",
                    "line": 40,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/libxml2/libxml/xmlstring.h",
                    "line": 105,
                    "column": 54,
                    "event": "note",
                    "message": "expected ‘const char *’ but argument is of type ‘xmlChar *’ {aka ‘unsigned char *’}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |                                          const char *msg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|           assert( xmlfmt != NULL );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|->         xmlStrVPrintf(ret, len, xmlfmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|           free(xmlfmt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
