{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "python-dmidecode-3.12.2-25.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/symbiotic/output",
        "time-created": "2023-01-29 15:15:11",
        "time-finished": "2023-01-29 15:19:28",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/python-dmidecode-3.12.2-25.fc35/python-dmidecode-3.12.2-25.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecode.c",
                    "line": 3907,
                    "column": 42,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'str_n' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                xmlNode *data_n = NULL, *str_n = NULL, *val_n = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 486,
                    "column": 25,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "assigning to 'char *' from 'const char *' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                section = PyUnicode_AsUTF8(args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^ ~~~~~~~~~~~~~~~~~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 617,
                    "column": 19,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "assigning to 'char *' from 'const char *' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                f = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^ ~~~~~~~~~~~~~~~~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 665,
                    "column": 23,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "assigning to 'char *' from 'const char *' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fname = PyUnicode_AsUTF8(arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ^ ~~~~~~~~~~~~~~~~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 740,
                    "column": 28,
                    "event": "warning[-Wincompatible-function-pointer-types]",
                    "message": "incompatible function pointer types initializing 'PyCFunction' (aka 'struct _object *(*)(struct _object *, struct _object *)') with an expression of type 'PyObject *(PyObject *, PyObject *, PyObject *)' (aka 'struct _object *(struct _object *, struct _object *, struct _object *)')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        {(char *)\"xmlapi\", dmidecode_xmlapi, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~~~~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 846,
                    "column": 72,
                    "event": "warning[-Wincompatible-function-pointer-types]",
                    "message": "incompatible function pointer types passing 'void (void *)' to parameter of type 'PyCapsule_Destructor' (aka 'void (*)(struct _object *)')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        PyModule_AddObject(module, \"options\", PyCapsule_New(opt, NULL, destruct_options));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/pycapsule.h",
                    "line": 31,
                    "column": 26,
                    "event": "note",
                    "message": "passing argument to parameter 'destructor' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    PyCapsule_Destructor destructor);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
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
            "cwe": 783,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidump.c",
                    "line": 98,
                    "column": 49,
                    "event": "warning[-Wlogical-not-parentheses]",
                    "message": "logical not is only applied to the left hand side of this comparison",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if(!checksum(buf, buf[0x05]) || !memcmp(buf + 0x10, \"_DMI_\", 5) == 0 ||",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^                               ~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|           if(mode == NON_LEGACY) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|->                 if(!checksum(buf, buf[0x05]) || !memcmp(buf + 0x10, \"_DMI_\", 5) == 0 ||",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|                      !checksum(buf + 0x10, 0x0F))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|                           return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.c",
                    "line": 68,
                    "column": 33,
                    "event": "warning[-Wpointer-sign]",
                    "message": "passing 'xmlChar *' (aka 'unsigned char *') to parameter of type 'const char *' converts between pointers to integer types where one is of the unique plain 'char' type and the other is not",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        xmlStrVPrintf(ret, len, xmlfmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/libxml2/libxml/xmlstring.h",
                    "line": 105,
                    "column": 54,
                    "event": "note",
                    "message": "passing argument to parameter 'msg' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         const char *msg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                     ^",
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
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmixml.h",
                    "line": 78,
                    "column": 14,
                    "event": "warning[-Wundefined-inline]",
                    "message": "inline function 'dmixml_GetContent' is not defined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "inline char *dmixml_GetContent(xmlNode *node);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "python-dmidecode-3.12.2/src/dmidecodemodule.c",
                    "line": 840,
                    "column": 18,
                    "event": "note",
                    "message": "used here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        dmiver = dmixml_GetContent(opt->dmiversion_n);",
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
                    "message": "   76|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   xmlNode *dmixml_FindNode(xmlNode *, const char *key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|-> inline char *dmixml_GetContent(xmlNode *node);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   inline char *dmixml_GetNodeContent(xmlNode *node, const char *key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   char *dmixml_GetXPathContent(Log_t *logp, char *buf, size_t buflen, xmlXPathObject *xpo, int idx);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
