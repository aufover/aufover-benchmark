{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gc-8.0.4-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/divine/output",
        "time-created": "2023-01-26 15:40:00",
        "time-finished": "2023-01-26 15:45:20",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/gc-8.0.4-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 51,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/alloc.c",
                    "line": 278,
                    "column": 20,
                    "event": "warning",
                    "message": "incompatible pointer to integer conversion assigning to 'word' (aka 'unsigned long') from 'char *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        stack_size = GC_stackbottom - GC_approx_sp();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|           stack_size = GC_approx_sp() - GC_stackbottom;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   #     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|->         stack_size = GC_stackbottom - GC_approx_sp();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|   #     endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|       }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/blacklst.c",
                    "line": 59,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ptr_t base = (ptr_t)GC_base(p);",
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
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 545,
                    "column": 61,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void * GC_CALL GC_base(void * /* displaced_pointer */);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   GC_INNER void GC_default_print_heap_obj_proc(ptr_t p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->     ptr_t base = (ptr_t)GC_base(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       int kind = HDR(base)->hb_obj_kind;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/blacklst.c",
                    "line": 63,
                    "column": 56,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  (void *)base, (unsigned long)GC_size(base),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 556,
                    "column": 58,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API size_t GC_CALL GC_size(const void * /* obj_addr */) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^",
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
                    "message": "   62|       GC_err_printf(\"object at %p of appr. %lu bytes (%s)\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->                   (void *)base, (unsigned long)GC_size(base),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|                     kind == PTRFREE ? \"atomic\" :",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|                       IS_UNCOLLECTABLE(kind) ? \"uncollectable\" : \"composite\");",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 39,
                    "column": 23,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    word sz = GC_size(p);",
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
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 556,
                    "column": 58,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API size_t GC_CALL GC_size(const void * /* obj_addr */) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ptr_t body = (ptr_t)((oh *)p + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     word sz = GC_size(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|       if (HBLKPTR(p) != HBLKPTR((ptr_t)body)",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 329,
                    "column": 26,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    word gc_sz = GC_size((ptr_t)ohdr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 556,
                    "column": 58,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API size_t GC_CALL GC_size(const void * /* obj_addr */) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|       ptr_t body = (ptr_t)(ohdr + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|->     word gc_sz = GC_size((ptr_t)ohdr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|       if (ohdr -> oh_sz + DEBUG_BYTES > gc_sz) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|           return((ptr_t)(&(ohdr -> oh_sz)));",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 369,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    oh * ohdr = (oh *)GC_base(p);",
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
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 545,
                    "column": 61,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void * GC_CALL GC_base(void * /* displaced_pointer */);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   STATIC void GC_print_obj(ptr_t p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|->     oh * ohdr = (oh *)GC_base(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       ptr_t q;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       hdr * hhdr;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 390,
                    "column": 38,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        (GC_describe_type_fns[kind])(q, buffer);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|           /* thread-local allocation.                             */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|           buffer[GC_TYPE_DESCR_LEN] = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|->         (GC_describe_type_fns[kind])(q, buffer);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|           GC_ASSERT(buffer[GC_TYPE_DESCR_LEN] == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|           kind_str = buffer;",
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
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 461,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                (unsigned long)(GC_size((ptr_t)ohdr) - DEBUG_BYTES));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 556,
                    "column": 58,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API size_t GC_CALL GC_size(const void * /* obj_addr */) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|                   \"%s %p in or near object at %p(<smashed>, appr. sz = %lu)\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|                   msg, (void *)clobbered_addr, p,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|->                 (unsigned long)(GC_size((ptr_t)ohdr) - DEBUG_BYTES));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|           GC_err_printf(\"%s %p in or near object at %p (%s:%d, sz=%lu)\\n\",",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 769,
                    "column": 27,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        word sz = GC_size(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 556,
                    "column": 58,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API size_t GC_CALL GC_size(const void * /* obj_addr */) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   #     ifndef SHORT_DBG_HDRS",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|           ptr_t clobbered = GC_check_annotated_obj((oh *)base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|->         word sz = GC_size(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  770|           if (clobbered != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771|             GC_have_errors = TRUE;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 791,
                    "column": 15,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_free(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 517,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_free(void *);",
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
                    "message": "  789|   #       endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|           ) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|->       GC_free(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|         hdr * hhdr = HDR(p);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 799,
                    "column": 17,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_free(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 517,
                    "column": 35,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_free(void *);",
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
                    "message": "  797|   #         endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|             ) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|->         GC_free(base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|         } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|           word i;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 949,
                    "column": 37,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ptr_t base = (ptr_t)GC_base(GC_smashed[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 545,
                    "column": 61,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void * GC_CALL GC_base(void * /* displaced_pointer */);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|                     GC_n_smashed);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|       for (i = 0; i < GC_n_smashed; ++i) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|->         ptr_t base = (ptr_t)GC_base(GC_smashed[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951|   #       ifdef LINT2",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 954,
                    "column": 34,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_print_smashed_obj(\"\", base + sizeof(oh), GC_smashed[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 447,
                    "column": 59,
                    "event": "note",
                    "message": "passing argument to parameter 'p' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  STATIC void GC_print_smashed_obj(const char *msg, void *p,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  952|             if (!base) ABORT(\"Invalid GC_smashed element\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  953|   #       endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  954|->         GC_print_smashed_obj(\"\", base + sizeof(oh), GC_smashed[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  955|           GC_smashed[i] = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  956|       }",
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
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1013,
                    "column": 25,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_set_mark_bit(base); /* do not reclaim it in this cycle */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|     for (i = 0; i < obj_sz; ++i)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1012|       if (p[i] != GC_FREED_MEM_MARKER) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1013|->         GC_set_mark_bit(base); /* do not reclaim it in this cycle */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|           GC_add_smashed((ptr_t)(&p[i])); /* alter-after-free detected */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|           break; /* don't report any other smashed locations in the object */",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1100,
                    "column": 29,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1044,
                    "column": 59,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1098|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1099|       if (0 == fn) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1100|->       GC_register_finalizer(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|         cd = GC_make_closure(fn, cd);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1104,
                    "column": 29,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1044,
                    "column": 59,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|         cd = GC_make_closure(fn, cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|         if (cd == 0) return; /* out of memory */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1104|->       GC_register_finalizer(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1105|                               cd, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1106|       }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1129,
                    "column": 38,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_no_order(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1114,
                    "column": 68,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_no_order(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|       if (0 == fn) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1129|->       GC_register_finalizer_no_order(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1130|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131|         cd = GC_make_closure(fn, cd);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1133,
                    "column": 38,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_no_order(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1114,
                    "column": 68,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_no_order(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131|         cd = GC_make_closure(fn, cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|         if (cd == 0) return; /* out of memory */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133|->       GC_register_finalizer_no_order(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|                                        cd, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|       }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1158,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_unreachable(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1139,
                    "column": 71,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_unreachable(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1156|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1157|       if (0 == fn) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1158|->       GC_register_finalizer_unreachable(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1159|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1160|         cd = GC_make_closure(fn, cd);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1162,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_unreachable(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1139,
                    "column": 71,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_unreachable(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1160|         cd = GC_make_closure(fn, cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1161|         if (cd == 0) return; /* out of memory */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1162|->       GC_register_finalizer_unreachable(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1163|                                           cd, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1164|       }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1187,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_ignore_self(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1101,
                    "column": 71,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_ignore_self(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|       if (0 == fn) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|->       GC_register_finalizer_ignore_self(base, 0, 0, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1189|         cd = GC_make_closure(fn, cd);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 52,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/dbg_mlc.c",
                    "line": 1191,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_register_finalizer_ignore_self(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1101,
                    "column": 71,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_register_finalizer_ignore_self(void * /* obj */,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1189|         cd = GC_make_closure(fn, cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1190|         if (cd == 0) return; /* out of memory */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1191|->       GC_register_finalizer_ignore_self(base, GC_debug_invoke_finalizer,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192|                                           cd, &my_old_fn, &my_old_cd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193|       }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 176,
                    "column": 56,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return(GC_general_register_disappearing_link(link, base));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc.h",
                    "line": 1180,
                    "column": 75,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                    const void * /* obj */)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|       if (base == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|           ABORT(\"Bad arg to GC_register_disappearing_link\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|->     return(GC_general_register_disappearing_link(link, base));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   ",
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
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 659,
                    "column": 23,
                    "event": "warning",
                    "message": "variables 'q' and 'scan_limit' used in loop condition not modified in loop body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    for (q = p; (word)q <= (word)scan_limit; q += ALIGNMENT) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ^          ~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|          scan_limit = target_limit + 1 - sizeof(word);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  659|->     for (q = p; (word)q <= (word)scan_limit; q += ALIGNMENT) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  660|           word r = *(word *)q;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  661|   ",
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
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 963,
                    "column": 54,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (NULL == real_link || EXPECT(GC_is_marked(real_link), TRUE)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                     ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 112,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'EXPECT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EXPECT(expr, outcome) __builtin_expect(expr,outcome)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|                                                   curr_dl->dl_hidden_link));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|->         if (NULL == real_link || EXPECT(GC_is_marked(real_link), TRUE)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|             prev_dl = curr_dl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  965|             continue;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 968,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (EXPECT(GC_is_marked((ptr_t)GC_REVEAL_POINTER(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 112,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'EXPECT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EXPECT(expr, outcome) __builtin_expect(expr,outcome)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  967|         } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  968|->         if (EXPECT(GC_is_marked((ptr_t)GC_REVEAL_POINTER(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  969|                                           curr_dl->dl_hidden_obj)), TRUE)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  970|             prev_dl = curr_dl;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1026,
                    "column": 27,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1024|           GC_ASSERT(GC_size(curr_fo) >= sizeof(struct finalizable_object));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025|           real_ptr = (ptr_t)GC_REVEAL_POINTER(curr_fo->fo_hidden_base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|->         if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|               GC_MARKED_FOR_FINALIZATION(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|               GC_MARK_FO(real_ptr, curr_fo -> fo_mark_proc);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1028,
                    "column": 24,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            GC_MARK_FO(real_ptr, curr_fo -> fo_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_pmark.h",
                    "line": 440,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'GC_MARK_FO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_set_mark_bit(real_ptr); \\",
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
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|           if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|               GC_MARKED_FOR_FINALIZATION(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|->             GC_MARK_FO(real_ptr, curr_fo -> fo_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|               if (GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|                   WARN(\"Finalization cycle involving %p\\n\", real_ptr);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1029,
                    "column": 30,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|               GC_MARKED_FOR_FINALIZATION(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|               GC_MARK_FO(real_ptr, curr_fo -> fo_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|->             if (GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|                   WARN(\"Finalization cycle involving %p\\n\", real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|               }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1043,
                    "column": 27,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|         while (curr_fo != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042|           real_ptr = (ptr_t)GC_REVEAL_POINTER(curr_fo->fo_hidden_base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|->         if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|               if (!GC_java_finalization) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045|                 GC_set_mark_bit(real_ptr);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1045,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|           if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|               if (!GC_java_finalization) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045|->               GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1047|               /* Delete from hash table */",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1062,
                    "column": 42,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                GC_object_finalized_proc(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1060|                 GC_fo_entries--;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1061|                 if (GC_object_finalized_proc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1062|->                 GC_object_finalized_proc(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1063|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1064|               /* Add to list of objects awaiting finalization.    */",
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
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1090,
                    "column": 27,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|              curr_fo != NULL; curr_fo = fo_next(curr_fo)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|           real_ptr = (ptr_t)curr_fo -> fo_hidden_base;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|->         if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|               if (curr_fo -> fo_mark_proc == GC_null_finalize_mark_proc) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1092|                   GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1092,
                    "column": 28,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_pmark.h",
                    "line": 440,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'GC_MARK_FO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_set_mark_bit(real_ptr); \\",
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
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|           if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|               if (curr_fo -> fo_mark_proc == GC_null_finalize_mark_proc) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1092|->                 GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1093|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1094|               if (curr_fo -> fo_mark_proc != GC_unreachable_finalize_mark_proc) {",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1095,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1093|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1094|               if (curr_fo -> fo_mark_proc != GC_unreachable_finalize_mark_proc) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1095|->                 GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1096|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1097|           }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1113,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 276,
                    "column": 45,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API int GC_CALL GC_is_marked(const void *) GC_ATTR_NONNULL(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1111|             if (curr_fo -> fo_mark_proc == GC_unreachable_finalize_mark_proc) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1112|               real_ptr = (ptr_t)curr_fo -> fo_hidden_base;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1113|->             if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1114|                 GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1115|               } else {",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1114,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1112|               real_ptr = (ptr_t)curr_fo -> fo_hidden_base;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1113|               if (!GC_is_marked(real_ptr)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1114|->               GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1115|               } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1116|                 if (NULL == prev_fo) {",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1185,
                    "column": 22,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_pmark.h",
                    "line": 440,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'GC_MARK_FO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_set_mark_bit(real_ptr); \\",
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
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|             ptr_t real_ptr = (ptr_t)GC_REVEAL_POINTER(curr_fo->fo_hidden_base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|->           GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|             GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|   ",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1186,
                    "column": 27,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/gc_mark.h",
                    "line": 278,
                    "column": 49,
                    "event": "note",
                    "message": "passing argument to parameter here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GC_API void GC_CALL GC_set_mark_bit(const void *) GC_ATTR_NONNULL(1);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|             GC_MARK_FO(real_ptr, GC_normal_finalize_mark_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|->           GC_set_mark_bit(real_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188|             next_fo = fo_next(curr_fo);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 53,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1281,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        (*(curr_fo -> fo_fn))((ptr_t)(curr_fo -> fo_hidden_base),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1279|   #       endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1280|           fo_set_next(curr_fo, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1281|->         (*(curr_fo -> fo_fn))((ptr_t)(curr_fo -> fo_hidden_base),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282|                                 curr_fo -> fo_client_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1283|           curr_fo -> fo_client_data = 0;",
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
                    "file_name": "gc-8.0.4/finalize.c",
                    "line": 1282,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              curr_fo -> fo_client_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1280|           fo_set_next(curr_fo, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1281|           (*(curr_fo -> fo_fn))((ptr_t)(curr_fo -> fo_hidden_base),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282|->                               curr_fo -> fo_client_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1283|           curr_fo -> fo_client_data = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1284|           ++count;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/gcj_mlc.c",
                    "line": 199,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_dirty(op);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 2198,
                    "column": 54,
                    "event": "note",
                    "message": "expanded from macro 'GC_dirty'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GC_dirty(p) (GC_manual_vdb ? GC_dirty_inner(p) : (void)0)",
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
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 2197,
                    "column": 44,
                    "event": "note",
                    "message": "passing argument to parameter 'p' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  GC_INNER void GC_dirty_inner(const void *p); /* does not require locking */",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|       *(void **)op = ptr_to_struct_containing_descr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|       UNLOCK();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|->     GC_dirty(op);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|       REACHABLE_AFTER_DIRTY(ptr_to_struct_containing_descr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       return (void *)op;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/gcj_mlc.c",
                    "line": 275,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_dirty(op);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 2198,
                    "column": 54,
                    "event": "note",
                    "message": "expanded from macro 'GC_dirty'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GC_dirty(p) (GC_manual_vdb ? GC_dirty_inner(p) : (void)0)",
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
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 2197,
                    "column": 44,
                    "event": "note",
                    "message": "passing argument to parameter 'p' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  GC_INNER void GC_dirty_inner(const void *p); /* does not require locking */",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|       *(void **)op = ptr_to_struct_containing_descr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|       UNLOCK();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|->     GC_dirty(op);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|       REACHABLE_AFTER_DIRTY(ptr_to_struct_containing_descr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|       return (void *)op;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/headers.c",
                    "line": 78,
                    "column": 28,
                    "event": "warning",
                    "message": "comparison of integers of different signs: 'unsigned long' and 'ptrdiff_t' (aka 'long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            || p - current >= (ptrdiff_t)(hhdr->hb_sz)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ~~~~~~~~~~~ ^  ~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|               return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|           if (HBLK_IS_FREE(hhdr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|->             || p - current >= (ptrdiff_t)(hhdr->hb_sz)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|               GC_ADD_TO_BLACK_LIST_NORMAL(p, source);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|               /* Pointer past the end of the block */",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 55,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 78,
                    "column": 16,
                    "event": "warning",
                    "message": "incompatible pointer to integer conversion assigning to 'ptr_t' (aka 'unsigned long') from 'char [4096]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        result = h -> hb_body;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^ ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|           /* FIXME: Do we need some way to reset GC_max_large_allocd_bytes? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|->         result = h -> hb_body;",
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
                    "message": "   80|       return result;",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 96,
                    "column": 15,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        BZERO(result, n_blocks * HBLKSIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 515,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'BZERO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define BZERO(x,n)  memset(x, 0, (size_t)(n))",
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
                    "file_name": "/opt/divine/include/dios/include/string.h",
                    "line": 233,
                    "column": 23,
                    "event": "note",
                    "message": "passing argument to parameter 's' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "void * memset( void * s, int c, size_t n ) _PDCLIB_nothrow;",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|           /* Clear the whole block, in case of GC_realloc call. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->         BZERO(result, n_blocks * HBLKSIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|       return result;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 55,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 191,
                    "column": 16,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            op = GC_allocobj(lg, k);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^ ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|                   !GC_alloc_reclaim_list(kind))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|                 return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|->             op = GC_allocobj(lg, k);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|               if (0 == op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|                 return NULL;",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 200,
                    "column": 12,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        op = (ptr_t)GC_alloc_large_and_clear(ADD_SLOP(lb), k, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|           GC_bytes_allocd += GRANULES_TO_BYTES((word)lg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|->         op = (ptr_t)GC_alloc_large_and_clear(ADD_SLOP(lb), k, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|           if (op != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|               GC_bytes_allocd += lb;",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 222,
                    "column": 8,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    op = GC_alloc_large_and_clear(lb_adjusted, k, IGNORE_OFF_PAGE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|       GC_ASSERT(k < MAXOBJKINDS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|       lb_adjusted = ADD_SLOP(lb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|->     op = GC_alloc_large_and_clear(lb_adjusted, k, IGNORE_OFF_PAGE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|       if (op != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|           GC_bytes_allocd += lb_adjusted;",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 264,
                    "column": 16,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        result = (ptr_t)GC_alloc_large(lb_rounded, k, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|           init = GC_obj_kinds[k].ok_init;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|           LOCK();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|->         result = (ptr_t)GC_alloc_large(lb_rounded, k, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|           if (0 != result) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|             if (GC_debugging_started) {",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 606,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        *flh = (ptr_t)p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^ ~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|           flh = &(ok -> ok_freelist[ngranules]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|           obj_link(p) = *flh;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|->         *flh = (ptr_t)p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|           UNLOCK();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|       } else {",
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
                    "file_name": "gc-8.0.4/malloc.c",
                    "line": 651,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        *flh = (ptr_t)p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^ ~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|           flh = &(ok -> ok_freelist[ngranules]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|           obj_link(p) = *flh;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|->         *flh = (ptr_t)p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|           size_t nblocks = OBJ_SZ_TO_BLOCKS(sz);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 56,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 154,
                    "column": 23,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                BZERO(((ptr_t)p) + lb, orig_sz - lb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gc_priv.h",
                    "line": 515,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'BZERO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define BZERO(x,n)  memset(x, 0, (size_t)(n))",
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
                    "file_name": "/opt/divine/include/dios/include/string.h",
                    "line": 233,
                    "column": 23,
                    "event": "note",
                    "message": "passing argument to parameter 's' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "void * memset( void * s, int c, size_t n ) _PDCLIB_nothrow;",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|                 /* Clear unneeded part of object to avoid bogus pointer */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|                 /* tracing.                                             */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|->                 BZERO(((ptr_t)p) + lb, orig_sz - lb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|               return(p);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 56,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 218,
                    "column": 12,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    result = (ptr_t)GC_alloc_large(ADD_SLOP(lb), k, IGNORE_OFF_PAGE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|       GC_DBG_COLLECT_AT_MALLOC(lb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|       LOCK();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|->     result = (ptr_t)GC_alloc_large(ADD_SLOP(lb), k, IGNORE_OFF_PAGE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       if (NULL == result) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|           GC_oom_func oom_fn = GC_oom_fn;",
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
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 378,
                    "column": 16,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            op = GC_reclaim_generic(hbp, hhdr, lb,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                 }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   #           endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|->             op = GC_reclaim_generic(hbp, hhdr, lb,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|                                       ok -> ok_init, 0, &my_bytes_allocd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|               if (op != 0) {",
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
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 454,
                    "column": 18,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              op = GC_build_fl(h, lw,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^ ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|                 GC_release_mark_lock();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|->               op = GC_build_fl(h, lw,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|                           (ok -> ok_init || GC_debugging_started), 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   ",
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
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 466,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          op = GC_build_fl(h, lw, (ok -> ok_init || GC_debugging_started), 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|   #         endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|->           op = GC_build_fl(h, lw, (ok -> ok_init || GC_debugging_started), 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|             goto out;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|           }",
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
                    "file_name": "gc-8.0.4/mallocx.c",
                    "line": 530,
                    "column": 12,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion returning 'ptr_t' (aka 'unsigned long') from a function with result type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528|       result += offset;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|       GC_ASSERT((word)result % align == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|->     return result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|   ",
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
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 740,
                    "column": 17,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                PREFETCH((ptr_t)current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738|                 FIXUP_POINTER(current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  739|                 if (current >= (word)least_ha && current < (word)greatest_ha) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|->                 PREFETCH((ptr_t)current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  741|   #               ifdef ENABLE_TRACE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|                     if (GC_trace_addr == current_p) {",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 57,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 835,
                    "column": 11,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          PREFETCH(limit - PREF_DIST*CACHE_LINE_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|           /* for this loop is still not great.                            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  834|           for(;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  835|->           PREFETCH(limit - PREF_DIST*CACHE_LINE_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  836|             GC_ASSERT((word)limit >= (word)current_p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  837|             deferred = *(word *)limit;",
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
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 841,
                    "column": 13,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            PREFETCH((ptr_t)deferred);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  839|             limit -= ALIGNMENT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  840|             if (deferred >= (word)least_ha && deferred < (word)greatest_ha) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  841|->             PREFETCH((ptr_t)deferred);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  842|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  843|             }",
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
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 851,
                    "column": 13,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            PREFETCH((ptr_t)deferred);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  849|             limit -= ALIGNMENT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|             if (deferred >= (word)least_ha && deferred < (word)greatest_ha) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|->             PREFETCH((ptr_t)deferred);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|             }",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 57,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 864,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        PREFETCH(current_p + PREF_DIST*CACHE_LINE_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  862|           current = *(word *)current_p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  863|           FIXUP_POINTER(current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  864|->         PREFETCH(current_p + PREF_DIST*CACHE_LINE_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  865|           if (current >= (word)least_ha && current < (word)greatest_ha) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  866|             /* Prefetch the contents of the object we just pushed.  It's  */",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 57,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/mark.c",
                    "line": 868,
                    "column": 11,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          PREFETCH((ptr_t)current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3193,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'PREFETCH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define PREFETCH(x) __builtin_prefetch((x), 0, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  866|             /* Prefetch the contents of the object we just pushed.  It's  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  867|             /* likely we will need them soon.                             */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868|->           PREFETCH((ptr_t)current);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869|   #         ifdef ENABLE_TRACE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  870|               if (GC_trace_addr == current_p) {",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 61,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_PREFETCH_FOR_WRITE((ptr_t)(p + 64));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       p += 4;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       for (; (word)p < (word)lim; p += 4) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|->         GC_PREFETCH_FOR_WRITE((ptr_t)(p + 64));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|           p[0] = (word)(p-4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|           p[1] = 0;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 95,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        GC_PREFETCH_FOR_WRITE((ptr_t)(p + 64));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|       p += 8;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|       for (; (word)p < (word)lim; p += 8) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|->         GC_PREFETCH_FOR_WRITE((ptr_t)(p + 64));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|           p[0] = (word)(p-4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|           p[4] = (word)p;",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 119,
                    "column": 5,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_PREFETCH_FOR_WRITE((ptr_t)h);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     /* the loops.  But write prefetches usually don't seem to     */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|     /* matter much.                                               */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|->     GC_PREFETCH_FOR_WRITE((ptr_t)h);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 128);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 256);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 120,
                    "column": 5,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_PREFETCH_FOR_WRITE((ptr_t)h + 128);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|     /* matter much.                                               */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       GC_PREFETCH_FOR_WRITE((ptr_t)h);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|->     GC_PREFETCH_FOR_WRITE((ptr_t)h + 128);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 256);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 378);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 121,
                    "column": 5,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_PREFETCH_FOR_WRITE((ptr_t)h + 256);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       GC_PREFETCH_FOR_WRITE((ptr_t)h);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 128);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|->     GC_PREFETCH_FOR_WRITE((ptr_t)h + 256);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 378);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   # ifndef SMALL_CONFIG",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 122,
                    "column": 5,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'unsigned long' to parameter of type 'const void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    GC_PREFETCH_FOR_WRITE((ptr_t)h + 378);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/include/private/gcconfig.h",
                    "line": 3201,
                    "column": 56,
                    "event": "note",
                    "message": "expanded from macro 'GC_PREFETCH_FOR_WRITE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#   define GC_PREFETCH_FOR_WRITE(x) __builtin_prefetch((x), 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 128);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       GC_PREFETCH_FOR_WRITE((ptr_t)h + 256);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|->     GC_PREFETCH_FOR_WRITE((ptr_t)h + 378);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   # ifndef SMALL_CONFIG",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       /* Handle small objects sizes more efficiently.  For larger objects */",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 45,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 155,
                    "column": 21,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        obj_link(p) = (ptr_t)prev;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^ ~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|       while ((word)p <= (word)last_object) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|         /* current object's link points to last object */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|->         obj_link(p) = (ptr_t)prev;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|           prev = p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|           p += sz;",
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
                    "file_name": "gc-8.0.4/new_hblk.c",
                    "line": 188,
                    "column": 44,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'void *' from 'ptr_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      GC_obj_kinds[kind].ok_freelist[gran] =",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|     /* Build the free list */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->       GC_obj_kinds[kind].ok_freelist[gran] =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|           GC_build_fl(h, GRANULES_TO_WORDS(gran), clear,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|                       (ptr_t)GC_obj_kinds[kind].ok_freelist[gran]);",
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
                    "file_name": "gc-8.0.4/extra/gc.c",
                    "line": 47,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/ptr_chck.c",
                    "line": 99,
                    "column": 31,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    (*GC_same_obj_print_proc)((ptr_t)p, (ptr_t)q);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->     (*GC_same_obj_print_proc)((ptr_t)p, (ptr_t)q);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   }",
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
                    "file_name": "gc-8.0.4/ptr_chck.c",
                    "line": 99,
                    "column": 41,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    (*GC_same_obj_print_proc)((ptr_t)p, (ptr_t)q);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->     (*GC_same_obj_print_proc)((ptr_t)p, (ptr_t)q);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   }",
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
                    "file_name": "gc-8.0.4/ptr_chck.c",
                    "line": 148,
                    "column": 44,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    (*GC_is_valid_displacement_print_proc)((ptr_t)p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|->     (*GC_is_valid_displacement_print_proc)((ptr_t)p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   }",
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
                    "file_name": "gc-8.0.4/ptr_chck.c",
                    "line": 255,
                    "column": 33,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion passing 'ptr_t' (aka 'unsigned long') to parameter of type 'void *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    (*GC_is_visible_print_proc)((ptr_t)p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   #   endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|->     (*GC_is_visible_print_proc)((ptr_t)p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|       return(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
