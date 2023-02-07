{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libcomps-0.1.18-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/cbmc/output",
        "time-created": "2023-01-30 07:26:07",
        "time-finished": "2023-01-30 07:33:18",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcomps-0.1.18-1.fc35/libcomps-0.1.18-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'comps_parse_start_doctype'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_parse.c",
                    "line": 133,
                    "column": 36,
                    "event": "warning[-Wunused-parameter]",
                    "message": "unused parameter 'standalone'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 |                                int standalone) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|                                  const XML_Char *sysid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|                                  const XML_Char *pubid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|->                                int standalone) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|       #define parsed ((COMPS_Parsed*)userData)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|       parsed->doctype_name = comps_str(doctypeName);",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 765,
                    "column": 22,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765 |     {\"groups_match\", (PyCFunction)PyCOMPS_groups_match, METH_VARARGS | METH_KEYWORDS,",
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
                    "message": "  763|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|   static PyMethodDef PyCOMPS_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|->     {\"groups_match\", (PyCFunction)PyCOMPS_groups_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|       {\"categories_match\", (PyCFunction)PyCOMPS_categories_match, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 767,
                    "column": 26,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767 |     {\"categories_match\", (PyCFunction)PyCOMPS_categories_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|       {\"groups_match\", (PyCFunction)PyCOMPS_groups_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|->     {\"categories_match\", (PyCFunction)PyCOMPS_categories_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|       {\"environments_match\", (PyCFunction)PyCOMPS_envs_match, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 769,
                    "column": 28,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769 |     {\"environments_match\", (PyCFunction)PyCOMPS_envs_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|       {\"categories_match\", (PyCFunction)PyCOMPS_categories_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|->     {\"environments_match\", (PyCFunction)PyCOMPS_envs_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  770|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771|       {\"validate\", (PyCFunction)PyCOMPS_validate, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 771,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS *)' {aka 'struct _object * (*)(PyCOMPS *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771 |     {\"validate\", (PyCFunction)PyCOMPS_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|       {\"environments_match\", (PyCFunction)PyCOMPS_envs_match, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  770|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771|->     {\"validate\", (PyCFunction)PyCOMPS_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  772|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|       {\"validate_nf\", (PyCFunction)PyCOMPS_validate_nf, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 773,
                    "column": 21,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS *)' {aka 'struct _object * (*)(PyCOMPS *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773 |     {\"validate_nf\", (PyCFunction)PyCOMPS_validate_nf, METH_NOARGS,",
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
                    "message": "  771|       {\"validate\", (PyCFunction)PyCOMPS_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  772|       PyCOMPS_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|->     {\"validate_nf\", (PyCFunction)PyCOMPS_validate_nf, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|       PyCOMPS_validate_nf__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|       {\"xml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 775,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775 |     {\"xml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|       {\"validate_nf\", (PyCFunction)PyCOMPS_validate_nf, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|       PyCOMPS_validate_nf__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|->     {\"xml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|       PyCOMPS_xml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|       {\"xml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 777,
                    "column": 17,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777 |     {\"xml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|       {\"xml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|       PyCOMPS_xml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|->     {\"xml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|       PyCOMPS_xml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|       {\"toxml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 779,
                    "column": 17,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779 |     {\"toxml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|       {\"xml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|       PyCOMPS_xml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|->     {\"toxml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780|       PyCOMPS_toxml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  781|       {\"toxml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 781,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  781 |     {\"toxml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
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
                    "message": "  779|       {\"toxml_f\", (PyCFunction)PyCOMPS_toxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780|       PyCOMPS_toxml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  781|->     {\"toxml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  782|       PyCOMPS_toxml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  783|       {\"fromxml_f\", (PyCFunction)PyCOMPS_fromxml_f, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 783,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  783 |     {\"fromxml_f\", (PyCFunction)PyCOMPS_fromxml_f, METH_VARARGS | METH_KEYWORDS,",
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
                    "message": "  781|       {\"toxml_str\", (PyCFunction)PyCOMPS_toxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  782|       PyCOMPS_toxml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  783|->     {\"fromxml_f\", (PyCFunction)PyCOMPS_fromxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  784|       PyCOMPS_fromxml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|       {\"fromxml_str\", (PyCFunction)PyCOMPS_fromxml_str, METH_VARARGS | METH_KEYWORDS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 785,
                    "column": 21,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785 |     {\"fromxml_str\", (PyCFunction)PyCOMPS_fromxml_str, METH_VARARGS | METH_KEYWORDS,",
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
                    "message": "  783|       {\"fromxml_f\", (PyCFunction)PyCOMPS_fromxml_f, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  784|       PyCOMPS_fromxml_f__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|->     {\"fromxml_str\", (PyCFunction)PyCOMPS_fromxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|       PyCOMPS_fromxml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|       {\"clear\", (PyCFunction)PyCOMPS_clear, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 787,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787 |     {\"clear\", (PyCFunction)PyCOMPS_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|       {\"fromxml_str\", (PyCFunction)PyCOMPS_fromxml_str, METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|       PyCOMPS_fromxml_str__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|->     {\"clear\", (PyCFunction)PyCOMPS_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|       \"Clear Comps\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|       {\"get_last_errors\", (PyCFunction)PyCOMPS_get_last_errors,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps.c",
                    "line": 968,
                    "column": 33,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  968 |     {\"get_xml_default_options\", (PyCFunction)Libcomps_xml_default, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  967|   static PyMethodDef LibcompsMethods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  968|->     {\"get_xml_default_options\", (PyCFunction)Libcomps_xml_default, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  969|        \"Return xml output default options\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  970|       {NULL, NULL, 0, NULL}        /* Sentinel */",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_categories.c",
                    "line": 202,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS_Category *)' {aka 'struct _object * (*)(PyCOMPS_Category *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |     {\"validate\", (PyCFunction)PyCOMPSCat_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   PyMethodDef PyCOMPSCat_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|->     {\"validate\", (PyCFunction)PyCOMPSCat_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|       \"validate inner category structure\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|       {NULL}  /* Sentinel */",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_dict.c",
                    "line": 388,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388 |      {\"items\", (PyCFunction)PyCOMPSDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|        {\"has_key\", (PyCFunction)PyCOMPSDict_has_key, METH_O,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|          PyCOMPSDict_has_key__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|->      {\"items\", (PyCFunction)PyCOMPSDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|        \"return iterator returning (key, value) tuple\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|        {\"values\", (PyCFunction)PyCOMPSDict_getitervalues, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_dict.c",
                    "line": 390,
                    "column": 17,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390 |      {\"values\", (PyCFunction)PyCOMPSDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|        {\"items\", (PyCFunction)PyCOMPSDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|        \"return iterator returning (key, value) tuple\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|->      {\"values\", (PyCFunction)PyCOMPSDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|        \"return iterator returning item's value\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|        {\"keys\", (PyCFunction)PyCOMPSDict_getiter, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_dict.c",
                    "line": 392,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392 |      {\"keys\", (PyCFunction)PyCOMPSDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|        {\"values\", (PyCFunction)PyCOMPSDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|        \"return iterator returning item's value\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|->      {\"keys\", (PyCFunction)PyCOMPSDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|        \"return iterator returning item's key\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|        {\"clear\", (PyCFunction)PyCOMPSDict_clear, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_dict.c",
                    "line": 394,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394 |      {\"clear\", (PyCFunction)PyCOMPSDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|        {\"keys\", (PyCFunction)PyCOMPSDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|        \"return iterator returning item's key\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|->      {\"clear\", (PyCFunction)PyCOMPSDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|        \"clear the dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|        {\"copy\", (PyCFunction)PyCOMPSDict_copy, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_dict.c",
                    "line": 396,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396 |      {\"copy\", (PyCFunction)PyCOMPSDict_copy, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|        {\"clear\", (PyCFunction)PyCOMPSDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|        \"clear the dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|->      {\"copy\", (PyCFunction)PyCOMPSDict_copy, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|        \"return shallow copy of dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|        {\"update\", (PyCFunction)PyCOMPSDict_update, METH_O,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_envs.c",
                    "line": 168,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS_Env *)' {aka 'struct _object * (*)(PyCOMPS_Env *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168 |     {\"validate\", (PyCFunction)PyCOMPSEnv_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   PyMethodDef PyCOMPSEnv_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|->     {\"validate\", (PyCFunction)PyCOMPSEnv_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|       PyCOMPS_env_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|       {NULL}  /* Sentinel */",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_gids.c",
                    "line": 200,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS_GID *)' {aka 'struct _object * (*)(PyCOMPS_GID *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200 |     {\"validate\", (PyCFunction)PyCOMPSGID_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   PyMethodDef PyCOMPSGID_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|->     {\"validate\", (PyCFunction)PyCOMPSGID_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       \"validate inner Group ID structure\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|       {NULL}  /* Sentinel */",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_groups.c",
                    "line": 213,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS_Group *)' {aka 'struct _object * (*)(PyCOMPS_Group *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213 |     {\"validate\", (PyCFunction)PyCOMPSGroup_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|   PyMethodDef PyCOMPSGroup_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|->     {\"validate\", (PyCFunction)PyCOMPSGroup_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|        PyCOMPS_group_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|       {\"packages_match\", (PyCFunction)PyCOMPSGroup_packages_match,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_groups.c",
                    "line": 215,
                    "column": 24,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *, PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *, struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |     {\"packages_match\", (PyCFunction)PyCOMPSGroup_packages_match,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       {\"validate\", (PyCFunction)PyCOMPSGroup_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|        PyCOMPS_group_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->     {\"packages_match\", (PyCFunction)PyCOMPSGroup_packages_match,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|        METH_VARARGS | METH_KEYWORDS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|        PyCOMPS_group_packages_match__doc__},",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_groups.c",
                    "line": 845,
                    "column": 18,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyCOMPS_Package *)' {aka 'struct _object * (*)(PyCOMPS_Package *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  845 |     {\"validate\", (PyCFunction)PyCOMPSPackage_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  843|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  844|   PyMethodDef PyCOMPSPack_methods[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  845|->     {\"validate\", (PyCFunction)PyCOMPSPackage_validate, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  846|       PyCOMPS_package_validate__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  847|       {NULL}  /* Sentinel */",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_mdict.c",
                    "line": 408,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408 |      {\"items\", (PyCFunction)PyCOMPSMDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|        {\"has_key\", (PyCFunction)PyCOMPSMDict_has_key, METH_O,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|        PyCOMPSMDict_has_key__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|->      {\"items\", (PyCFunction)PyCOMPSMDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|        \"return iterator returning (key, value) tuple\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|        {\"values\", (PyCFunction)PyCOMPSMDict_getitervalues, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_mdict.c",
                    "line": 410,
                    "column": 17,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410 |      {\"values\", (PyCFunction)PyCOMPSMDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|        {\"items\", (PyCFunction)PyCOMPSMDict_getiteritems, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|        \"return iterator returning (key, value) tuple\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|->      {\"values\", (PyCFunction)PyCOMPSMDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|        \"return iterator returning item's value\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|        {\"keys\", (PyCFunction)PyCOMPSMDict_getiter, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_mdict.c",
                    "line": 412,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412 |      {\"keys\", (PyCFunction)PyCOMPSMDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|        {\"values\", (PyCFunction)PyCOMPSMDict_getitervalues, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|        \"return iterator returning item's value\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|->      {\"keys\", (PyCFunction)PyCOMPSMDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|        \"return iterator returning item's key\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|        {\"clear\", (PyCFunction)PyCOMPSMDict_clear, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_mdict.c",
                    "line": 414,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414 |      {\"clear\", (PyCFunction)PyCOMPSMDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|        {\"keys\", (PyCFunction)PyCOMPSMDict_getiter, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|        \"return iterator returning item's key\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|->      {\"clear\", (PyCFunction)PyCOMPSMDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|        \"clear the dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|        {\"copy\", (PyCFunction)PyCOMPSMDict_copy, METH_NOARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_mdict.c",
                    "line": 416,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416 |      {\"copy\", (PyCFunction)PyCOMPSMDict_copy, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|        {\"clear\", (PyCFunction)PyCOMPSMDict_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|        \"clear the dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|->      {\"copy\", (PyCFunction)PyCOMPSMDict_copy, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|        \"return shallow copy of dict\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|        {\"update\", (PyCFunction)PyCOMPSMDict_update, METH_O,",
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
                    "file_name": "libcomps-0.1.18/libcomps/src/python/src/pycomps_sequence.c",
                    "line": 646,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'PyObject * (*)(PyObject *)' {aka 'struct _object * (*)(struct _object *)'} to 'PyObject * (*)(PyObject *, PyObject *)' {aka 'struct _object * (*)(struct _object *, struct _object *)'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646 |      {\"clear\", (PyCFunction)PyCOMPSSeq_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  644|        {\"remove\", (PyCFunction)PyCOMPSSeq_remove, METH_O,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  645|        PyCOMPSSeq_remove__doc__},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646|->      {\"clear\", (PyCFunction)PyCOMPSSeq_clear, METH_NOARGS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|        \"Clear the list\"},",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|        {\"insert\", (PyCFunction)PyCOMPSSeq_insert, METH_VARARGS,",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_comps_doc_basic_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 90,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 |     fail_if(tmplist->len == 0, \"No groups found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       tmplist = comps_doc_groups(doc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->     fail_if(tmplist->len == 0, \"No groups found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       g = (COMPS_DocGroup*)tmplist->first->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 95,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95 |     fail_if(tmplist->len == 0, \"Group with id 'g1' should be in groups, but\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|       tmplist = comps_doc_get_groups(doc, \"g1\", NULL, NULL, NULL, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|->     fail_if(tmplist->len == 0, \"Group with id 'g1' should be in groups, but\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|                                  \"cant get it\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       g = (COMPS_DocGroup*)tmplist->first->comps_obj;",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 101,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   ",
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
                    "message": "  101|->     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|                                  \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 101,
                    "column": 32,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |                                \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                          ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   ",
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
                    "message": "  101|->     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|                                  \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 105,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|->     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|                                  \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 105,
                    "column": 32,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |                                \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                          ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|->     fail_if(tmplist->len != 4, \"Group with id 'g1' should have 4 optional \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|                                  \"packages. But have %d.\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 279,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|       g2 = (COMPS_DocGroup*)list->first->next->comps_obj;",
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
                    "message": "  279|->     fail_if(g->packages->len != 14, \"Union of (g1 v g2) should have 14 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|               \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_comps_doc_setfeats_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 279,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279 |     fail_if(g->packages->len != 14, \"Union of (g1 v g2) should have 14 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280 |             \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|       g2 = (COMPS_DocGroup*)list->first->next->comps_obj;",
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
                    "message": "  279|->     fail_if(g->packages->len != 14, \"Union of (g1 v g2) should have 14 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|               \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 283,
                    "column": 36,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->     fail_if(g->packages->len != 2, \"Intersect of (g1 ^ g2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|               \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 283,
                    "column": 36,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283 |     fail_if(g->packages->len != 2, \"Intersect of (g1 ^ g2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284 |             \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                             |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                             size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->     fail_if(g->packages->len != 2, \"Intersect of (g1 ^ g2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|               \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 289,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|       g2 = (COMPS_DocGroup*)list->first->next->next->comps_obj;",
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
                    "message": "  289|->     fail_if(g->packages->len != 16, \"Union of (g2 v g3) should have 16 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|               \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 289,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289 |     fail_if(g->packages->len != 16, \"Union of (g2 v g3) should have 16 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290 |             \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|       g2 = (COMPS_DocGroup*)list->first->next->next->comps_obj;",
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
                    "message": "  289|->     fail_if(g->packages->len != 16, \"Union of (g2 v g3) should have 16 packages\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|               \" have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 293,
                    "column": 36,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|->     fail_if(g->packages->len != 0, \"Intersect of (g2 ^ g3) should have 0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|               \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 293,
                    "column": 36,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293 |     fail_if(g->packages->len != 0, \"Intersect of (g2 ^ g3) should have 0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294 |             \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                             |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                             size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|->     fail_if(g->packages->len != 0, \"Intersect of (g2 ^ g3) should have 0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|               \"packages, have %d\", g->packages->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       COMPS_OBJECT_DESTROY(g);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 303,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       c = comps_doccategory_union(c1, c2);",
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
                    "message": "  303|->     fail_if(c->group_ids->len != 4, \"Union of (c1 v c2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 303,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 |     fail_if(c->group_ids->len != 4, \"Union of (c1 v c2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304 |             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       c = comps_doccategory_union(c1, c2);",
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
                    "message": "  303|->     fail_if(c->group_ids->len != 4, \"Union of (c1 v c2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 308,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   ",
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
                    "message": "  308|->     fail_if(c->group_ids->len != 2, \"Intersect of (c1 ^ c2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 308,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308 |     fail_if(c->group_ids->len != 2, \"Intersect of (c1 ^ c2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 |             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   ",
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
                    "message": "  308|->     fail_if(c->group_ids->len != 2, \"Intersect of (c1 ^ c2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 315,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|       c2 = (COMPS_DocCategory*)list->first->next->next->comps_obj;",
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
                    "message": "  315|->     fail_if(c->group_ids->len != 4, \"Union of (c2 v c3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 315,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315 |     fail_if(c->group_ids->len != 4, \"Union of (c2 v c3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316 |             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|       c2 = (COMPS_DocCategory*)list->first->next->next->comps_obj;",
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
                    "message": "  315|->     fail_if(c->group_ids->len != 4, \"Union of (c2 v c3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 319,
                    "column": 37,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|->     fail_if(c->group_ids->len != 2, \"Intersect of (c2 ^ c3) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 319,
                    "column": 37,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319 |     fail_if(c->group_ids->len != 2, \"Intersect of (c2 ^ c3) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320 |             \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|->     fail_if(c->group_ids->len != 2, \"Intersect of (c2 ^ c3) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|               \"group ids, have %d\", c->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|       COMPS_OBJECT_DESTROY(c);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 328,
                    "column": 38,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|       e2 = (COMPS_DocEnv*)list->first->next->comps_obj;",
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
                    "message": "  328|->     fail_if(e->group_list->len != 4, \"Union of (e1 v e2) should have 4 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 328,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328 |     fail_if(e->group_list->len != 4, \"Union of (e1 v e2) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329 |             \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|       e2 = (COMPS_DocEnv*)list->first->next->comps_obj;",
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
                    "message": "  328|->     fail_if(e->group_list->len != 4, \"Union of (e1 v e2) should have 4 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 330,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                    "message": "  329|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|->     fail_if(e->option_list->len != 7, \"Union of (e1 v e2) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 330,
                    "column": 39,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330 |     fail_if(e->option_list->len != 7, \"Union of (e1 v e2) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331 |             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 size_t {aka long unsigned int}",
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
                    "message": "  329|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|->     fail_if(e->option_list->len != 7, \"Union of (e1 v e2) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 334,
                    "column": 38,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|->     fail_if(e->group_list->len != 2, \"Intersect of (e1 ^ e2) should have 2\"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 334,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334 |     fail_if(e->group_list->len != 2, \"Intersect of (e1 ^ e2) should have 2\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335 |             \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|->     fail_if(e->group_list->len != 2, \"Intersect of (e1 ^ e2) should have 2\"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 336,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                    "message": "  335|               \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|->     fail_if(e->option_list->len != 1, \"Union of (e1 v e2) should have 1 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 336,
                    "column": 39,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336 |     fail_if(e->option_list->len != 1, \"Union of (e1 v e2) should have 1 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337 |             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 size_t {aka long unsigned int}",
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
                    "message": "  335|               \"group ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|->     fail_if(e->option_list->len != 1, \"Union of (e1 v e2) should have 1 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 343,
                    "column": 38,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|       e2 = (COMPS_DocEnv*)list->first->next->next->comps_obj;",
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
                    "message": "  343|->     fail_if(e->group_list->len != 4, \"Union of (e2 v e3) should have 4 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 343,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343 |     fail_if(e->group_list->len != 4, \"Union of (e2 v e3) should have 4 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344 |             \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|       e2 = (COMPS_DocEnv*)list->first->next->next->comps_obj;",
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
                    "message": "  343|->     fail_if(e->group_list->len != 4, \"Union of (e2 v e3) should have 4 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 345,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                    "message": "  344|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|->     fail_if(e->option_list->len != 6, \"Union of (e2 v e3) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 345,
                    "column": 39,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345 |     fail_if(e->option_list->len != 6, \"Union of (e2 v e3) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346 |             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 size_t {aka long unsigned int}",
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
                    "message": "  344|               \"groud ids have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|->     fail_if(e->option_list->len != 6, \"Union of (e2 v e3) should have 7 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 349,
                    "column": 38,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|->     fail_if(e->group_list->len != 2, \"Intersect of (e2 ^ e3) should have 2 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 349,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349 |     fail_if(e->group_list->len != 2, \"Intersect of (e2 ^ e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350 |             \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|->     fail_if(e->group_list->len != 2, \"Intersect of (e2 ^ e3) should have 2 \"",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 351,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                    "message": "  350|               \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|->     fail_if(e->option_list->len != 2, \"Intersect of (e2 v e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 351,
                    "column": 39,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351 |     fail_if(e->option_list->len != 2, \"Intersect of (e2 v e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 |             \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 size_t {aka long unsigned int}",
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
                    "message": "  350|               \"groupids  have %d\", e->group_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|->     fail_if(e->option_list->len != 2, \"Intersect of (e2 v e3) should have 2 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|               \"option ids have %d\", e->option_list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       COMPS_OBJECT_DESTROY(e);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 358,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|       tmpdoc = comps_doc_union(doc, doc2);",
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
                    "message": "  358|->     fail_if(list->len != 6, \"Union of (doc ^ doc2) should have 6 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|               \"groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 358,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358 |     fail_if(list->len != 6, \"Union of (doc ^ doc2) should have 6 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359 |             \"groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|       tmpdoc = comps_doc_union(doc, doc2);",
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
                    "message": "  358|->     fail_if(list->len != 6, \"Union of (doc ^ doc2) should have 6 \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|               \"groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 362,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|->     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|               \"should have 4 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 362,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362 |     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363 |             \"should have 4 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                      |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                      size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|->     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|               \"should have 4 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 366,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|               \"should have 4 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 366,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366 |     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367 |             \"should have 4 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->     fail_if(list->len != 4, \"Union of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|               \"should have 4 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 372,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       tmpdoc = comps_doc_intersect(doc, doc2);",
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
                    "message": "  372|->     fail_if(list->len != 2, \"Intersect of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|               \"should have 2 groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 372,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372 |     fail_if(list->len != 2, \"Intersect of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373 |             \"should have 2 groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       tmpdoc = comps_doc_intersect(doc, doc2);",
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
                    "message": "  372|->     fail_if(list->len != 2, \"Intersect of (doc ^ doc2) \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|               \"should have 2 groups  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 376,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|->     fail_if(list->len != 2, \"Intersect of (doc ^ doc2)\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|               \" should have 2 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 376,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376 |     fail_if(list->len != 2, \"Intersect of (doc ^ doc2)\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |             \" should have 2 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                   ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|->     fail_if(list->len != 2, \"Intersect of (doc ^ doc2)\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|               \" should have 2 categories  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 380,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|->     fail_if(list->len != 2, \"Intersect of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|               \"(doc ^ doc2) should have 2 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_comps.c",
                    "line": 380,
                    "column": 29,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380 |     fail_if(list->len != 2, \"Intersect of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381 |             \"(doc ^ doc2) should have 2 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                     |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                     size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|->     fail_if(list->len != 2, \"Intersect of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|               \"(doc ^ doc2) should have 2 environments  have %d\", list->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       COMPS_OBJECT_DESTROY(list);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_comps_parse1_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 89,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |     ck_assert_msg(tmplist->len == 3, \"Should have 3 groups parsed.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 |             \"Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~~~   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|       }",
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
                    "message": "   89|->     ck_assert_msg(tmplist->len == 3, \"Should have 3 groups parsed.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|               \"Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       COMPS_OBJECT_DESTROY(tmplist);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 93,
                    "column": 38,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93 |     ck_assert_msg(tmplist->len == 2, \"Should have 2 categories\"",
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
                    "message": "   94 |             \"parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       size_t {aka long unsigned int}",
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
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|->     ck_assert_msg(tmplist->len == 2, \"Should have 2 categories\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|               \"parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|       COMPS_OBJECT_DESTROY(tmplist);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 98,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 |             \"Should have 1 environment parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 98,
                    "column": 13,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 |             \"Should have 1 environment parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                 size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 98,
                    "column": 54,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 |             \"Should have 1 environment parsed. Have %d\", tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                      |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                      int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     %ld",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 105,
                    "column": 34,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |         fail_if(tmpobj2 == NULL, \"Group not found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|           tmplist = comps_doc_groups(parsed->comps_doc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           tmpobj2 = comps_objlist_get_x(tmplist, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|->         fail_if(tmpobj2 == NULL, \"Group not found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|           tmpobj = comps_docgroup_get_id((COMPS_DocGroup*)tmpobj2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|           tmpstr = comps_object_tostr(tmpobj);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 109,
                    "column": 24,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109 |                        \"%d.group should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|           tmpstr = comps_object_tostr(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|           fail_if(strcmp(tmpstr, groups_ids[i]) != 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|->                        \"%d.group should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|                           i, groups_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|           free(tmpstr);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 117,
                    "column": 24,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 |                        \"%d.group should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           tmpstr = comps_object_tostr(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|           fail_if(strcmp(tmpstr, groups_names[i]) != 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|->                        \"%d.group should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|                           i, groups_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|           free(tmpstr);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 125,
                    "column": 24,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125 |                        \"%d.group should have desc:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|           tmpstr = comps_object_tostr(tmpobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|           fail_if(strcmp(tmpstr, groups_descs[i]) != 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|->                        \"%d.group should have desc:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                           i, groups_descs[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|           free(tmpstr);",
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
                    "message": "comparison of integer expressions of different signedness: 'int' and 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 |         fail_if(group_packages[i][0] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 133,
                    "column": 55,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 133,
                    "column": 55,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 7 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 |         fail_if(group_packages[i][0] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134 |                 \" %d default packages, Have %d\", i, group_packages[i][0],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135 |                 tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~~                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        size_t {aka long unsigned int}",
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
                    "message": "comparison of integer expressions of different signedness: 'int' and 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139 |         fail_if(group_packages[i][1] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 139,
                    "column": 55,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 139,
                    "column": 55,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 7 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139 |         fail_if(group_packages[i][1] != tmplist->len, \"Group #%d should have\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140 |                 \" %d optional packages, Have %d\", i, group_packages[i][1],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141 |                 tmplist->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~~                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        size_t {aka long unsigned int}",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 150,
                    "column": 24,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |                        \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|           tmpstr = comps_object_tostr(tmpobj);",
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
                    "message": "  150|->                        \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                           i, cats_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           free(tmpstr);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 150,
                    "column": 24,
                    "event": "warning[-Wformat=]",
                    "message": "format '%s' expects argument of type 'char *', but argument 5 has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |                        \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151 |                         i, cats_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 150,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |                        \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         %d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|           tmpstr = comps_object_tostr(tmpobj);",
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
                    "message": "  150|->                        \"%s. category should have id:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                           i, cats_ids[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           free(tmpstr);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 158,
                    "column": 24,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |                        \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|           tmpstr = comps_object_tostr(tmpobj);",
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
                    "message": "  158|->                        \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|                           i, cats_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           free(tmpstr);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 158,
                    "column": 24,
                    "event": "warning[-Wformat=]",
                    "message": "format '%s' expects argument of type 'char *', but argument 5 has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |                        \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159 |                         i, cats_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 158,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |                        \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         %d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|           tmpstr = comps_object_tostr(tmpobj);",
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
                    "message": "  158|->                        \"%s. category should have name:%s not %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|                           i, cats_names[i], tmpstr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           free(tmpstr);",
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
                    "message": "comparison of integer expressions of different signedness: 'size_t' {aka 'long unsigned int'} and 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163 |         fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                               ^~",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 164,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 |                 \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "message": "  163|           fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|->                 \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|                   cats_gids[i], ((COMPS_DocCategory*)tmpobj2)->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|           COMPS_OBJECT_DESTROY(tmpobj2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 164,
                    "column": 17,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 7 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 |                 \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165 |                 cats_gids[i], ((COMPS_DocCategory*)tmpobj2)->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                       size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 164,
                    "column": 62,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 |                 \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                             ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                              |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                              int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                             %ld",
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
                    "message": "  163|           fail_if(((COMPS_DocCategory*)tmpobj2)->group_ids->len != cats_gids[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|->                 \"Category #%d should have %d groupids, have %d\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|                   cats_gids[i], ((COMPS_DocCategory*)tmpobj2)->group_ids->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|           COMPS_OBJECT_DESTROY(tmpobj2);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 177,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177 |     fail_if(ret >0, \"XML shouldn't be valid. Validation returned: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|       comps_parse_file(parsed, fp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       ret = comps_parse_validate_dtd(\"sample-bad-elem.xml\", \"comps.dtd\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|->     fail_if(ret >0, \"XML shouldn't be valid. Validation returned: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|       if (parsed->log->entries->first != NULL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'check_errors'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 198,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198 |                 \"%d err opt_message doesn't match (%d != %d)\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|           fail_if(((COMPS_LogEntry*)it->data)->arg_count !=",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|                   known_errors[i]->arg_count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|->                 \"%d err opt_message doesn't match (%d != %d)\", i,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|                   ((COMPS_LogEntry*)it->data)->arg_count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|                   known_errors[i]->arg_count);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 202,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |                     known_errors[i]->code, \"%d. err code different\\n (%d != %d)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|                   known_errors[i]->arg_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|           fail_if(((COMPS_LogEntry*)it->data)->code !=",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|->                     known_errors[i]->code, \"%d. err code different\\n (%d != %d)\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|                       i, ((COMPS_LogEntry*)it->data)->code,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|                       known_errors[i]->code);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 210,
                    "column": 70,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |                                      known_errors[i]->args[x]) == 0, \"%d. %s != %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                      ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|               _y = comps_object_tostr(known_errors[i]->args[x]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|               fail_if(comps_object_cmp(((COMPS_LogEntry*)it->data)->args[x],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|->                                      known_errors[i]->args[x]) == 0, \"%d. %s != %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|                                        x, _x, _y);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|               free(_x);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_comps_parse3_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 344,
                    "column": 21,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344 |     fail_if(tmpobj, \"%d. category should have NULL id\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 344,
                    "column": 23,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344 |     fail_if(tmpobj, \"%d. category should have NULL id\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      %p",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 347,
                    "column": 21,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347 |     fail_if(tmpobj, \"%d. category should have NULL name\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 347,
                    "column": 23,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347 |     fail_if(tmpobj, \"%d. category should have NULL name\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      %p",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 350,
                    "column": 21,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350 |     fail_if(tmpobj, \"%d. category should have NULL description\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 350,
                    "column": 23,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350 |     fail_if(tmpobj, \"%d. category should have NULL description\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      %p",
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
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_comps_fedora_parse_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 479,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479 |     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|       comps_parse_file(parsed, fp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  478|       //printf(\"log len:%d\\n\", parsed->log->logger_data->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479|->     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  480|       //printf(\"log len:%d\\n\", parsed->log->logger_data->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  481|       //err_str = comps_log_str(parsed->log);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_main2_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 507,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507 |     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|       fp = fopen(\"main_comps2.xml\", \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|       comps_parse_file(parsed, fp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|->     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|       //comps2xml_f(parsed->comps_doc, \"fed2.xml\", 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|       comps_parse_parsed_destroy(parsed);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_arch_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 557,
                    "column": 39,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557 |     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|       comps_parse_file(parsed, fp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|       //comps_log_print(parsed->log);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|->     fail_if(parsed->fatal_error != 0, \"Some fatal errors found after parsing\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|       //comps2xml_f(parsed->comps_doc, \"fed2.xml\", 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|       arches = (COMPS_ObjList*)comps_object_create(&COMPS_ObjList_ObjInfo, NULL);",
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
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_arch_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 588,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'COMPS_DocCategory *' to 'COMPS_DocGroup *': incompatible pointer types",
                    "verbosity_level": 0
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
                    "line": 588,
                    "column": 11,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "assignment to 'COMPS_DocGroup *' from incompatible pointer type 'COMPS_DocCategory *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588 |         g = (COMPS_DocCategory*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_arch_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 589,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'COMPS_DocGroup *' to 'COMPS_DocCategory *': incompatible pointer types",
                    "verbosity_level": 0
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
                    "line": 589,
                    "column": 52,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "passing argument 1 of 'comps_doccategory_get_id' from incompatible pointer type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589 |         str = (COMPS_Str*)comps_doccategory_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    COMPS_DocGroup *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_objradix.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_objdict.h",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_doc.h",
                    "line": 24,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_doccategory.h",
                    "line": 110,
                    "column": 24,
                    "event": "note",
                    "message": "expected 'COMPS_DocCategory *' but argument is of type 'COMPS_DocGroup *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110 | HEAD_COMPS_PROP_GETTER(category, COMPS_DocCategory, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_utils.h",
                    "line": 94,
                    "column": 71,
                    "event": "note",
                    "message": "in definition of macro 'HEAD_COMPS_PROP_GETTER'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94 |                                                             (OBJTYPE *OBJNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                       ^~~~~~~",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_arch_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 608,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'COMPS_DocEnv *' to 'COMPS_DocGroup *': incompatible pointer types",
                    "verbosity_level": 0
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
                    "line": 608,
                    "column": 11,
                    "event": "warning[-Wincompatible-pointer-types]",
                    "message": "assignment to 'COMPS_DocGroup *' from incompatible pointer type 'COMPS_DocEnv *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608 |         g = (COMPS_DocEnv*)it->comps_obj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_arch_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 609,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'COMPS_DocGroup *' to 'COMPS_DocEnv *': incompatible pointer types",
                    "verbosity_level": 0
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
                    "message": "passing argument 1 of 'comps_docenv_get_id' from incompatible pointer type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609 |         str = (COMPS_Str*)comps_docenv_get_id(g);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               COMPS_DocGroup *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_objradix.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_objdict.h",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_doc.h",
                    "line": 24,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_docenv.h",
                    "line": 92,
                    "column": 24,
                    "event": "note",
                    "message": "expected 'COMPS_DocEnv *' but argument is of type 'COMPS_DocGroup *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 | HEAD_COMPS_PROP_GETTER(env, COMPS_DocEnv, id) /*comps_utils.h macro*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/src/comps_utils.h",
                    "line": 94,
                    "column": 71,
                    "event": "note",
                    "message": "in definition of macro 'HEAD_COMPS_PROP_GETTER'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94 |                                                             (OBJTYPE *OBJNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                       ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcomps-0.1.18/libcomps/tests/check_parse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
