{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "ding-libs-0.6.1-48.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/divine/output",
        "time-created": "2023-01-26 14:47:34",
        "time-finished": "2023-01-26 14:54:11",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/ding-libs-0.6.1-48.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_cmp.c",
                    "line": 142,
                    "column": 24,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'char *' from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                substr = strcasestr(first->property, second->property);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|               /* Compare lengths first */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|               if (first->property_len >= second->property_len) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|->                 substr = strcasestr(first->property, second->property);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|                   if (substr != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|                       /* Check we need to validate for dot */",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_cmp.c",
                    "line": 142,
                    "column": 26,
                    "event": "warning",
                    "message": "implicit declaration of function 'strcasestr' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                substr = strcasestr(first->property, second->property);",
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
                    "message": "  140|               /* Compare lengths first */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|               if (first->property_len >= second->property_len) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|->                 substr = strcasestr(first->property, second->property);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|                   if (substr != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|                       /* Check we need to validate for dot */",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_cmp.c",
                    "line": 142,
                    "column": 26,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|               /* Compare lengths first */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|               if (first->property_len >= second->property_len) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|->                 substr = strcasestr(first->property, second->property);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|                   if (substr != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|                       /* Check we need to validate for dot */",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 318,
                    "column": 15,
                    "event": "warning",
                    "message": "implicitly declaring library function 'realloc' with type 'void *(void *, unsigned long)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        tmp = realloc(buf_data->buffer, buf_data->size + BLOCK_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 318,
                    "column": 15,
                    "event": "note",
                    "message": "include the header <stdlib.h> or explicitly provide a declaration for 'realloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       /* Grow buffer if needed */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|       while (buf_data->length+len >= buf_data->size) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|->         tmp = realloc(buf_data->buffer, buf_data->size + BLOCK_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|           if (tmp == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|               TRACE_ERROR_NUMBER(\"Error. Failed to allocate memory.\", ENOMEM);",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 385,
                    "column": 28,
                    "event": "warning",
                    "message": "implicitly declaring library function 'malloc' with type 'void *(unsigned long)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        buf_data->buffer = malloc(BLOCK_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 385,
                    "column": 28,
                    "event": "note",
                    "message": "include the header <stdlib.h> or explicitly provide a declaration for 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|       if (buf_data->buffer == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|           TRACE_INFO_STRING(\"First time use.\", \"Allocating buffer.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|->         buf_data->buffer = malloc(BLOCK_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           if (buf_data->buffer == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|               TRACE_ERROR_NUMBER(\"Error. Failed to allocate memory.\", ENOMEM);",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 562,
                    "column": 5,
                    "event": "warning",
                    "message": "implicit declaration of function 'free' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    free(buf_data.buffer);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|           printf(\"%s\\n\", buf_data.buffer);",
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
                    "message": "  562|->     free(buf_data.buffer);",
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
                    "message": "  564|       TRACE_FLOW_NUMBER(\"col_print_collection returning\", error);",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 562,
                    "column": 5,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|           printf(\"%s\\n\", buf_data.buffer);",
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
                    "message": "  562|->     free(buf_data.buffer);",
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
                    "message": "  564|       TRACE_FLOW_NUMBER(\"col_print_collection returning\", error);",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 652,
                    "column": 13,
                    "event": "warning",
                    "message": "implicit declaration of function 'free' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            free(buf_data.buffer);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|               buf_data.buffer[buf_data.length] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|               printf(\"%s\\n\", buf_data.buffer);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|->             free(buf_data.buffer);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|           else {",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 673,
                    "column": 13,
                    "event": "warning",
                    "message": "implicit declaration of function 'free' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            free(str_list[current]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|       if (str_list != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|           while(str_list[current]) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->             free(str_list[current]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|               current++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|           }",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 676,
                    "column": 9,
                    "event": "warning",
                    "message": "implicit declaration of function 'free' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        free(str_list);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|               current++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|->         free(str_list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   ",
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
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 717,
                    "column": 9,
                    "event": "warning",
                    "message": "implicit declaration of function 'free' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        free(list);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|           TRACE_ERROR_NUMBER(\"Failed to bind.\", err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|           if (error) *error = err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|->         free(list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|           return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_config.c",
                    "line": 391,
                    "column": 49,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ERROR_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|                   pe.error = ext_err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|                   error = col_add_binary_property(*error_list, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|->                                                 ERROR_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|                       TRACE_ERROR_NUMBER(\"Failed to add error to collection\",",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_config.c",
                    "line": 391,
                    "column": 49,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ERROR_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/collection/collection.h",
                    "line": 1193,
                    "column": 41,
                    "event": "note",
                    "message": "passing argument to parameter 'property' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            const char *property,",
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
                    "message": "  389|                   pe.error = ext_err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|                   error = col_add_binary_property(*error_list, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|->                                                 ERROR_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|                       TRACE_ERROR_NUMBER(\"Failed to add error to collection\",",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_config.c",
                    "line": 391,
                    "column": 49,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|                   pe.error = ext_err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|                   error = col_add_binary_property(*error_list, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|->                                                 ERROR_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|                       TRACE_ERROR_NUMBER(\"Failed to add error to collection\",",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_config.c",
                    "line": 419,
                    "column": 49,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                WARNING_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 36,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WARNING_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WARNING_TXT         _(\"Warning\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|                   pe.error = ext_err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|                   error = col_add_binary_property(*error_list, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|->                                                 WARNING_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|                       TRACE_ERROR_NUMBER(\"Failed to add warning to collection\",",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_config.c",
                    "line": 419,
                    "column": 49,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                WARNING_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 36,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WARNING_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WARNING_TXT         _(\"Warning\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/collection/collection.h",
                    "line": 1193,
                    "column": 41,
                    "event": "note",
                    "message": "passing argument to parameter 'property' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            const char *property,",
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
                    "message": "  417|                   pe.error = ext_err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|                   error = col_add_binary_property(*error_list, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|->                                                 WARNING_TXT, &pe, sizeof(pe));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|                       TRACE_ERROR_NUMBER(\"Failed to add warning to collection\",",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 1039,
                    "column": 44,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            snprintf(line, MAX_ERROR_LINE, LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 33,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1037|               }",
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
                    "message": " 1039|->             snprintf(line, MAX_ERROR_LINE, LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|                        col_get_item_property(item, NULL),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|                        pe->error,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 1039,
                    "column": 44,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            snprintf(line, MAX_ERROR_LINE, LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 33,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/include/stdio.h",
                    "line": 611,
                    "column": 82,
                    "event": "note",
                    "message": "passing argument to parameter 'format' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int snprintf( char * _PDCLIB_restrict s, size_t n, const char * _PDCLIB_restrict format, ... ) _PDCLIB_nothrow;",
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
                    "message": " 1037|               }",
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
                    "message": " 1039|->             snprintf(line, MAX_ERROR_LINE, LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|                        col_get_item_property(item, NULL),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|                        pe->error,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 1039,
                    "column": 44,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configobj.c",
                    "line": 33,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1037|               }",
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
                    "message": " 1039|->             snprintf(line, MAX_ERROR_LINE, LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|                        col_get_item_property(item, NULL),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|                        pe->error,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_fileobj.c",
                    "line": 377,
                    "column": 20,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'FILE *' (aka 'struct _PDCLIB_file *') from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    file_ctx->file = fmemopen(simplebuffer_get_vbuf(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|       TRACE_INFO_NUMBER(\"Size\", size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->     file_ctx->file = fmemopen(simplebuffer_get_vbuf(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                                 simplebuffer_get_len(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                                 \"r\");",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_fileobj.c",
                    "line": 377,
                    "column": 22,
                    "event": "warning",
                    "message": "implicit declaration of function 'fmemopen' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    file_ctx->file = fmemopen(simplebuffer_get_vbuf(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|       TRACE_INFO_NUMBER(\"Size\", size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->     file_ctx->file = fmemopen(simplebuffer_get_vbuf(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                                 simplebuffer_get_len(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                                 \"r\");",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_fileobj.c",
                    "line": 377,
                    "column": 22,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|       TRACE_INFO_NUMBER(\"Size\", size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->     file_ctx->file = fmemopen(simplebuffer_get_vbuf(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                                 simplebuffer_get_len(file_ctx->file_data),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                                 \"r\");",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_fileobj.c",
                    "line": 424,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'FILE *' (aka 'struct _PDCLIB_file *') from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        file = fmemopen(internal_data, internal_len, \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|           TRACE_INFO_STRING(\"Inside file_init data:\", (char *)internal_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|->         file = fmemopen(internal_data, internal_len, \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|           if (!file) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|               error = errno;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_fileobj.c",
                    "line": 424,
                    "column": 16,
                    "event": "warning",
                    "message": "implicit declaration of function 'fmemopen' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        file = fmemopen(internal_data, internal_len, \"r\");",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|           TRACE_INFO_STRING(\"Inside file_init data:\", (char *)internal_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|->         file = fmemopen(internal_data, internal_len, \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|           if (!file) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|               error = errno;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 583,
                    "column": 36,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|                                      po->seclinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|                                      ERR_DUPSECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|                       TRACE_ERROR_NUMBER(\"Failed to \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 583,
                    "column": 36,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 99,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter 'err_txt' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      const char *err_txt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|                                      po->seclinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|                                      ERR_DUPSECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|                       TRACE_ERROR_NUMBER(\"Failed to \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 583,
                    "column": 36,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|                                      po->seclinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|                                      ERR_DUPSECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|                       TRACE_ERROR_NUMBER(\"Failed to \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 630,
                    "column": 36,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|                                      po->seclinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|                                      ERR_DUPSECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|                       TRACE_ERROR_NUMBER(\"Failed to \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 630,
                    "column": 36,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 99,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter 'err_txt' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      const char *err_txt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|                                      po->seclinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|                                      ERR_DUPSECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|                       TRACE_ERROR_NUMBER(\"Failed to \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 794,
                    "column": 36,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|                                      merging ? po->seclinenum : po->keylinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|                                      merging ? ERR_DUPKEYSEC : ERR_DUPKEY,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|                       TRACE_ERROR_NUMBER(\"Failed to save error\", error);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 794,
                    "column": 36,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 99,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter 'err_txt' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      const char *err_txt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|                                      merging ? po->seclinenum : po->keylinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|                                      merging ? ERR_DUPKEYSEC : ERR_DUPKEY,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|->                                    ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|                   if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|                       TRACE_ERROR_NUMBER(\"Failed to save error\", error);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 857,
                    "column": 40,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|                                          merging ? po->seclinenum : po->keylinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|                                          merging ? ERR_DUPKEYSEC : ERR_DUPKEY,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|->                                        ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|                       if (error2) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|                           TRACE_ERROR_NUMBER(\"Failed to save error\", error2);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 857,
                    "column": 40,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 37,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_TXT           _(\"Error\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 99,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter 'err_txt' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      const char *err_txt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|                                          merging ? po->seclinenum : po->keylinenum,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|                                          merging ? ERR_DUPKEYSEC : ERR_DUPKEY,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|->                                        ERROR_TXT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|                       if (error2) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|                           TRACE_ERROR_NUMBER(\"Failed to save error\", error2);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 1517,
                    "column": 47,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'const char *' from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (po->last_error & INI_WARNING) err_str = WARNING_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                              ^ ~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1515|       TRACE_FLOW_ENTRY();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1516|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1517|->     if (po->last_error & INI_WARNING) err_str = WARNING_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1518|       else err_str = ERROR_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1519|   ",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 1517,
                    "column": 49,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (po->last_error & INI_WARNING) err_str = WARNING_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 36,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WARNING_TXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WARNING_TXT         _(\"Warning\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 28,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1515|       TRACE_FLOW_ENTRY();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1516|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1517|->     if (po->last_error & INI_WARNING) err_str = WARNING_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1518|       else err_str = ERROR_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1519|   ",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse.c",
                    "line": 1518,
                    "column": 18,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'const char *' from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    else err_str = ERROR_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^ ~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1516|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1517|       if (po->last_error & INI_WARNING) err_str = WARNING_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1518|->     else err_str = ERROR_TXT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1519|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1520|       error = save_error(po->el,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 123,
                    "column": 17,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^            ~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   static const char *parsing_error_str(int parsing_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|->     const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 123,
                    "column": 30,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   static const char *parsing_error_str(int parsing_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|->     const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 123,
                    "column": 30,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   static const char *parsing_error_str(int parsing_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|->     const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 124,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->     const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                                   _(\"Section name is missing.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 125,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"No closing bracket.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       const char *placeholder= _(\"Unknown pasing error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|->                                 _(\"No closing bracket.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                                   _(\"Section name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                                   _(\"Section name is too long.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 126,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Section name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       const char *str_error[] = { _(\"Data is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|->                                 _(\"Section name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                                   _(\"Section name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|                                   _(\"Equal sign is missing.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 127,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Section name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                                   _(\"No closing bracket.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                                   _(\"Section name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->                                 _(\"Section name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|                                   _(\"Equal sign is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                                   _(\"Property name is missing.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 128,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Equal sign is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                                   _(\"Section name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                                   _(\"Section name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->                                 _(\"Equal sign is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                                   _(\"Property name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                                   _(\"Property name is too long.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 129,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Property name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                                   _(\"Section name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|                                   _(\"Equal sign is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|->                                 _(\"Property name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                                   _(\"Property name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|                                   _(\"Failed to read line.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 130,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Property name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|                                   _(\"Equal sign is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                                   _(\"Property name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|->                                 _(\"Property name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|                                   _(\"Failed to read line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|                                   _(\"Invalid space character at the \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 131,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Failed to read line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                                   _(\"Property name is missing.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                                   _(\"Property name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|->                                 _(\"Failed to read line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|                                   _(\"Invalid space character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|                                     \"beginning of the line.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 132,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Invalid space character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                                   _(\"Property name is too long.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|                                   _(\"Failed to read line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|->                                 _(\"Invalid space character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|                                   _(\"Duplicate key is not allowed.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 134,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Duplicate key is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|                                   _(\"Invalid space character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|->                                 _(\"Duplicate key is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|                                   _(\"Duplicate key is detected while \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                                     \"merging sections.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 135,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Duplicate key is detected while \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|                                   _(\"Duplicate key is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|->                                 _(\"Duplicate key is detected while \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                                     \"merging sections.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|                                   _(\"Duplicate section is not allowed.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 137,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Duplicate section is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|                                   _(\"Duplicate key is detected while \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                                     \"merging sections.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|->                                 _(\"Duplicate section is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|                                   _(\"Invalid character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|                                     \"beginning of the line.\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 138,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Invalid character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                                     \"merging sections.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|                                   _(\"Duplicate section is not allowed.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->                                 _(\"Invalid character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|                                   _(\"Invalid tab character at the \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 140,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Invalid tab character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|                                   _(\"Invalid character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|->                                 _(\"Invalid tab character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|                                   _(\"Incomplete comment at the \"",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 142,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"Incomplete comment at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|                                   _(\"Invalid tab character at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|                                     \"beginning of the line.\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|->                                 _(\"Incomplete comment at the \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|                                     \"end of the file.\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       };",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 176,
                    "column": 17,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown grammar error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^            ~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   static const char *grammar_error_str(int grammar_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|->     const char *placeholder= _(\"Unknown grammar error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|       const char *str_error[] = { _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 176,
                    "column": 30,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown grammar error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   static const char *grammar_error_str(int grammar_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|->     const char *placeholder= _(\"Unknown grammar error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|       const char *str_error[] = { _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 178,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       const char *placeholder= _(\"Unknown grammar error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|->     const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 179,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|       const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 180,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|       const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 181,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 182,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|                                   _(\"\")",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 183,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|                                   _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|       };",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 184,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|->                                 _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|       };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|   ",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 217,
                    "column": 17,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown validation error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|   static const char *validation_error_str(int validation_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|->     const char *placeholder= _(\"Unknown validation error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       const char *str_error[] = { _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 217,
                    "column": 30,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *placeholder= _(\"Unknown validation error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|   static const char *validation_error_str(int validation_error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|->     const char *placeholder= _(\"Unknown validation error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       const char *str_error[] = { _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 219,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|       const char *placeholder= _(\"Unknown validation error.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|->     const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 220,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       /* THIS IS A TEMPORARY PLACEHOLDER !!!! */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 221,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       const char *str_error[] = { _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 222,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|                                   _(\"\"),",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 223,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|                                   _(\"\")",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 224,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|->                                 _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|                                   _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|       };",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 225,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion initializing 'const char *' with an expression of type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|                                   _(\"\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|->                                 _(\"\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|       };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   ",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 252,
                    "column": 13,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'const char *' from 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        val = _(\"Unknown error category.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|       default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|->         val = _(\"Unknown error category.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 252,
                    "column": 15,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        val = _(\"Unknown error category.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|       default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|->         val = _(\"Unknown error category.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 345,
                    "column": 22,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 39,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_COLLECTION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_COLLECTION    _(\"Passed in list is not a list of parse errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|                        COL_CLASS_INI_PERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|->                      WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|                        FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|                        ERROR_HEADER,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 345,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 39,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_COLLECTION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_COLLECTION    _(\"Passed in list is not a list of parse errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 264,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'wrong_col_error' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *wrong_col_error,",
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
                    "message": "  343|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|                        COL_CLASS_INI_PERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|->                      WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|                        FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|                        ERROR_HEADER,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 346,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 265,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'failed_to_process' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *failed_to_process,",
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
                    "message": "  344|                        COL_CLASS_INI_PERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|                        WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|->                      FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|                        ERROR_HEADER,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|                        LINE_FORMAT,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 347,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ERROR_HEADER,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 41,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_HEADER'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_HEADER        _(\"Parsing errors and warnings in file: %s\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 266,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'error_header' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *error_header,",
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
                    "message": "  345|                        WRONG_COLLECTION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|                        FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->                      ERROR_HEADER,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|                        LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|                        INI_FAMILY_PARSING);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 348,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 267,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'line_format' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *line_format,",
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
                    "message": "  346|                        FAILED_TO_PROCCESS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|                        ERROR_HEADER,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|->                      LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|                        INI_FAMILY_PARSING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|   }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 377,
                    "column": 22,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 43,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_GRAMMAR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_GRAMMAR       _(\"Passed in list is not a list of grammar errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                        COL_CLASS_INI_GERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->                      WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                        FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                        ERROR_HEADER_G,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 377,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 43,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_GRAMMAR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_GRAMMAR       _(\"Passed in list is not a list of grammar errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 264,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'wrong_col_error' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *wrong_col_error,",
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
                    "message": "  375|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                        COL_CLASS_INI_GERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->                      WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                        FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                        ERROR_HEADER_G,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 378,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 44,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROC_G'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROC_G    _(\"Internal Error. Failed to process list of grammar errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 265,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'failed_to_process' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *failed_to_process,",
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
                    "message": "  376|                        COL_CLASS_INI_GERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|                        WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|->                      FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                        ERROR_HEADER_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|                        LINE_FORMAT,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 379,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ERROR_HEADER_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 45,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_HEADER_G'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_HEADER_G      _(\"Logical errors and warnings in file: %s\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 266,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'error_header' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *error_header,",
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
                    "message": "  377|                        WRONG_GRAMMAR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                        FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|->                      ERROR_HEADER_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|                        LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|                        INI_FAMILY_GRAMMAR);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 380,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 267,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'line_format' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *line_format,",
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
                    "message": "  378|                        FAILED_TO_PROC_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                        ERROR_HEADER_G,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|->                      LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|                        INI_FAMILY_GRAMMAR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 408,
                    "column": 22,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 47,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_VALIDATION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_VALIDATION    _(\"Passed in list is not a list of validation errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|                        COL_CLASS_INI_VERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|->                      WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|                        FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|                        ERROR_HEADER_V,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 408,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 47,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_VALIDATION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_VALIDATION    _(\"Passed in list is not a list of validation errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 264,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'wrong_col_error' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *wrong_col_error,",
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
                    "message": "  406|                        error_list,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|                        COL_CLASS_INI_VERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|->                      WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|                        FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|                        ERROR_HEADER_V,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 409,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 48,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROC_V'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROC_V    _(\"Internal Error. Failed to process list of validation errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 265,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'failed_to_process' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *failed_to_process,",
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
                    "message": "  407|                        COL_CLASS_INI_VERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|                        WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|->                      FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|                        ERROR_HEADER_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|                        LINE_FORMAT,",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 410,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ERROR_HEADER_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 49,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'ERROR_HEADER_V'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ERROR_HEADER_V      _(\"Validation errors and warnings in file: %s\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 266,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'error_header' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *error_header,",
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
                    "message": "  408|                        WRONG_VALIDATION,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|                        FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|->                      ERROR_HEADER_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|                        LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|                        INI_FAMILY_VALIDATION);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 411,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'int' to parameter of type 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 51,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'LINE_FORMAT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LINE_FORMAT         _(\"%s (%d) on line %d: %s\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 267,
                    "column": 36,
                    "event": "note",
                    "message": "passing argument to parameter 'line_format' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             char *line_format,",
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
                    "message": "  409|                        FAILED_TO_PROC_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|                        ERROR_HEADER_V,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|->                      LINE_FORMAT,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|                        INI_FAMILY_VALIDATION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|   }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 436,
                    "column": 31,
                    "event": "warning",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(file, \"%s\\n\", WRONG_COLLECTION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ~~     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 39,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_COLLECTION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_COLLECTION    _(\"Passed in list is not a list of parse errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|       if (!col_is_of_class(error_list, COL_CLASS_INI_PESET)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|           TRACE_ERROR_STRING(\"Wrong collection class:\", WRONG_COLLECTION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|->         fprintf(file, \"%s\\n\", WRONG_COLLECTION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 436,
                    "column": 31,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(file, \"%s\\n\", WRONG_COLLECTION);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 39,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'WRONG_COLLECTION'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define WRONG_COLLECTION    _(\"Passed in list is not a list of parse errors.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|       if (!col_is_of_class(error_list, COL_CLASS_INI_PESET)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|           TRACE_ERROR_STRING(\"Wrong collection class:\", WRONG_COLLECTION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|->         fprintf(file, \"%s\\n\", WRONG_COLLECTION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 444,
                    "column": 30,
                    "event": "warning",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(file,\"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ~~     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|       if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|           TRACE_ERROR_STRING(\"Error (bind):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|->         fprintf(file,\"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 444,
                    "column": 30,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(file,\"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|       if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|           TRACE_ERROR_STRING(\"Error (bind):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|->         fprintf(file,\"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|       }",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 453,
                    "column": 35,
                    "event": "warning",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ~~     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|           if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|               TRACE_ERROR_STRING(\"Error (iterate):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|->             fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|               col_unbind_iterator(iterator);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|               return;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 453,
                    "column": 35,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|           if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|               TRACE_ERROR_STRING(\"Error (iterate):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|->             fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|               col_unbind_iterator(iterator);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|               return;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 467,
                    "column": 39,
                    "event": "warning",
                    "message": "format specifies type 'char *' but the argument has type 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ~~     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|               if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|                   TRACE_ERROR_STRING(\"Error (extract):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|->                 fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|                   col_unbind_iterator(iterator);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|                   return;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 467,
                    "column": 39,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_defines.h",
                    "line": 40,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FAILED_TO_PROCCESS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FAILED_TO_PROCCESS  _(\"Internal Error. Failed to process error list.\\n\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_print.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|               if (error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|                   TRACE_ERROR_STRING(\"Error (extract):\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|->                 fprintf(file, \"%s\\n\", FAILED_TO_PROCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|                   col_unbind_iterator(iterator);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|                   return;",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 84,
                    "column": 22,
                    "event": "warning",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|               ref_array_get(raw_lengths, i, (void *)&len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->             part = *((char **)(ptr));",
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
                    "message": "   86|               TRACE_INFO_STRING(\"Value:\", part);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 343,
                    "column": 26,
                    "event": "warning",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                part = *((char **)ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|               ptr = ref_array_get(vo->raw_lines, last, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|               if (ptr) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|->                 part = *((char **)ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|                   TRACE_INFO_STRING(\"Value\", part);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 1080,
                    "column": 26,
                    "event": "warning",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|                   ref_array_get(vo->raw_lengths, i, (void *)&len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|->                 part = *((char **)(ptr));",
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
                    "message": " 1082|                   TRACE_INFO_STRING(\"Value:\", part);",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 80,
                    "column": 56,
                    "event": "warning",
                    "message": "implicit declaration of function 'gettext' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case SUCCESS:                               return _(\"Success\");",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       switch(error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|->     case SUCCESS:                               return _(\"Success\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       case PATH_UTILS_ERROR_NOT_FULLY_NORMALIZED: return _(\"Path could not be fully normalized\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       }",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 80,
                    "column": 56,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion returning 'int' from a function with result type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case SUCCESS:                               return _(\"Success\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       switch(error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|->     case SUCCESS:                               return _(\"Success\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       case PATH_UTILS_ERROR_NOT_FULLY_NORMALIZED: return _(\"Path could not be fully normalized\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       }",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 80,
                    "column": 56,
                    "event": "warning",
                    "message": "this function declaration is not a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       switch(error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|->     case SUCCESS:                               return _(\"Success\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       case PATH_UTILS_ERROR_NOT_FULLY_NORMALIZED: return _(\"Path could not be fully normalized\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       }",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 81,
                    "column": 56,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion returning 'int' from a function with result type 'const char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    case PATH_UTILS_ERROR_NOT_FULLY_NORMALIZED: return _(\"Path could not be fully normalized\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.h",
                    "line": 54,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro '_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _(String) gettext(String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       switch(error) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|       case SUCCESS:                               return _(\"Success\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|->     case PATH_UTILS_ERROR_NOT_FULLY_NORMALIZED: return _(\"Path could not be fully normalized\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       return NULL;",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 346,
                    "column": 17,
                    "event": "warning",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    array_ptr = (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       /* component array */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|->     array_ptr = (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|       /* components copied after end of array */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       component_ptr = mem_block + ((n_components+1)*sizeof(char *));",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 368,
                    "column": 12,
                    "event": "warning",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|       *array_ptr = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|       if (count) *count = n_components;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|->     return (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   ",
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
                    "file_name": "ding-libs-0.6.1/refarray/ref_array.c",
                    "line": 568,
                    "column": 32,
                    "event": "warning",
                    "message": "cast from 'unsigned char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(\"\\n%s\\n\", *((char **)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|           if (num == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|->             printf(\"\\n%s\\n\", *((char **)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  570|           else if (num > 0) {",
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
                    "file_name": "ding-libs-0.6.1/refarray/ref_array.c",
                    "line": 571,
                    "column": 32,
                    "event": "warning",
                    "message": "cast from 'unsigned char *' to 'uint32_t *' (aka 'unsigned int *') increases required alignment from 1 to 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(\"\\n%d\\n\", *((uint32_t *)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  570|           else if (num > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  571|->             printf(\"\\n%d\\n\", *((uint32_t *)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  572|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  573|           else {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
