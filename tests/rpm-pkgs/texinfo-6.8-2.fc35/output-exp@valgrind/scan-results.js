{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "texinfo-6.8-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/valgrind/output",
        "time-created": "2022-11-23 18:27:09",
        "time-finished": "2022-11-23 18:35:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/texinfo-6.8-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/gnulib/lib/error.h",
                    "line": 33,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'error' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33 | extern void error (int __status, int __errnum, const char *__format, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 218,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218 | error (const char *fmt, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 218,
                    "column": 1,
                    "event": "note",
                    "message": "'error' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 218,
                    "column": 1,
                    "event": "note",
                    "message": "code may be misoptimized unless '-fno-strict-aliasing' is used",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|      If STATUS is nonzero, terminate the program with 'exit (STATUS)'.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|-> extern void error (int __status, int __errnum, const char *__format, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   #if GNULIB_VFPRINTF_POSIX",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|        _GL_ATTRIBUTE_FORMAT ((_GL_ATTRIBUTE_SPEC_PRINTF_STANDARD, 3, 4))",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/gnulib/lib/mbchar.h",
                    "line": 265,
                    "column": 58,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'MEM[(const struct mbchar_t *)&iter + 24B].bytes' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265 |       memcpy (&new_mbc->buf[0], &old_mbc->buf[0], old_mbc->bytes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                   ~~~~~~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/display.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'display_update_node_text'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/display.c",
                    "line": 491,
                    "column": 18,
                    "event": "note",
                    "message": "'iter' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491 |   mbi_iterator_t iter;  /* Used to iterate through part of node displayed.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|     if (old_mbc->ptr == &old_mbc->buf[0])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|->       memcpy (&new_mbc->buf[0], &old_mbc->buf[0], old_mbc->bytes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|         new_mbc->ptr = &new_mbc->buf[0];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/gnulib/lib/mbchar.h",
                    "line": 271,
                    "column": 35,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'MEM[(const struct mbchar_t *)&iter + 24B].wc_valid' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271 |   if ((new_mbc->wc_valid = old_mbc->wc_valid))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/display.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'display_update_node_text'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/display.c",
                    "line": 491,
                    "column": 18,
                    "event": "note",
                    "message": "'iter' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491 |   mbi_iterator_t iter;  /* Used to iterate through part of node displayed.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|       new_mbc->ptr = old_mbc->ptr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|     new_mbc->bytes = old_mbc->bytes;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|->   if ((new_mbc->wc_valid = old_mbc->wc_valid))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|       new_mbc->wc = old_mbc->wc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/ginfo",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2412 with arguments: --init-file ./t/Infokey-config -v hide-note-references=On file-in-subdir",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "596 bytes in 1 blocks are possibly lost in loss record 70 of 87",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 213,
                    "event": "note",
                    "message": "called from insert_text_into_node()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 106,
                    "event": "note",
                    "message": "called from build_dir_node()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 229,
                    "event": "note",
                    "message": "called from lookup_dir_entry()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 242,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 970,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dir_entry_of_infodir'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/dir.c",
                    "line": 257,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257 |       asprintf (&tmp, \"./%s\", dir_fullpath);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|         char *tmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|->       asprintf (&tmp, \"./%s\", dir_fullpath);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|         free (dir_fullpath);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|         dir_fullpath = tmp;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/filesys.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_find_fullpath'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/filesys.c",
                    "line": 102,
                    "column": 28,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |       || partial[0] == '.' && IS_SLASH(partial[1]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     /* If path is absolute already, see if it needs an extension. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|     if (IS_ABSOLUTE (partial)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->       || partial[0] == '.' && IS_SLASH(partial[1]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|         fullpath = info_add_extension (0, partial, finfo);",
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
                    "file_name": "texinfo-6.8/info/filesys.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_file_find_next_in_path'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/filesys.c",
                    "line": 167,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |               asprintf (&s, \"%s%s\", \"./\", with_extension);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|                 /* Prefix \"./\" to it. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|                 char *s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|->               asprintf (&s, \"%s%s\", \"./\", with_extension);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|                 free (with_extension);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|                 return s;",
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
                    "file_name": "texinfo-6.8/info/footnotes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'make_footnotes_node'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/footnotes.c",
                    "line": 122,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122 |     asprintf (&header,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123 |               \"*** Footnotes appearing in the node '%s' ***\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |               node->nodename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       long text_start = fn_start;",
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
                    "message": "  122|->     asprintf (&header,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|                 \"*** Footnotes appearing in the node '%s' ***\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|                 node->nodename);",
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
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_index_apropos'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 654,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654 |     asprintf (&prompt, \"%s [%s]: \", _(\"Index apropos\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|     if (index_search)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|->     asprintf (&prompt, \"%s [%s]: \", _(\"Index apropos\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|       asprintf (&prompt, \"%s: \", _(\"Index apropos\"));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 656,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656 |     asprintf (&prompt, \"%s: \", _(\"Index apropos\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|       asprintf (&prompt, \"%s [%s]: \", _(\"Index apropos\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|->     asprintf (&prompt, \"%s: \", _(\"Index apropos\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|     line = info_read_in_echo_area (prompt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658|     free (prompt);",
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
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'create_virtual_index'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 852,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852 |   asprintf (&node->nodename, \"Index for '%s'\", index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|     node = info_create_node ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|->   asprintf (&node->nodename, \"Index for '%s'\", index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|     node->fullpath = file_buffer->filename;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|     node->contents = text_buffer_base (&text);",
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
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_virtual_index'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 889,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889 |     asprintf (&prompt, \"%s [%s]: \", _(\"Index topic\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887|     /* Default to last search if there is one. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|     if (index_search)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|->     asprintf (&prompt, \"%s [%s]: \", _(\"Index topic\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|       asprintf (&prompt, \"%s: \", _(\"Index topic\"));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/indices.c",
                    "line": 891,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891 |     asprintf (&prompt, \"%s: \", _(\"Index topic\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|       asprintf (&prompt, \"%s [%s]: \", _(\"Index topic\"), index_search);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|->     asprintf (&prompt, \"%s: \", _(\"Index topic\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892|     line = info_read_maybe_completing (prompt, index_index);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|     free (prompt);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/info-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'scan_node_contents'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info-utils.c",
                    "line": 1468,
                    "column": 31,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'line_len' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1468 |                 skip_input (1 + line_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info-utils.c",
                    "line": 1427,
                    "column": 11,
                    "event": "note",
                    "message": "'line_len' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1427 |       int line_len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1466|                 skip_input (strspn (inptr, \" \"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1467|                 if (line_len <= strspn (inptr + 1, \" \"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1468|->                 skip_input (1 + line_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1469|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1470|             else",
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
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_initial_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 185,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185 |           asprintf (&s, \"%s%s\", \"./\", user_filename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                in INFOPATH.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|             char *s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|->           asprintf (&s, \"%s%s\", \"./\", user_filename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|             free (user_filename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|             user_filename = s;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 277,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277 |         asprintf (error, _(\"No menu item '%s' in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278 |             (*argv)[0], \"(dir)Top\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|->         asprintf (error, _(\"No menu item '%s' in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|               (*argv)[0], \"(dir)Top\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       }",
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
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'add_initial_nodes'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/info.c",
                    "line": 415,
                    "column": 19,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415 |                   asprintf (error, _(\"Cannot find node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416 |                             user_nodenames[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|                   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|                     free (*error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|->                   asprintf (error, _(\"Cannot find node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|                               user_nodenames[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|                     continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/infopath.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'infopath_add'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/infopath.c",
                    "line": 201,
                    "column": 10,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around assignment used as truth value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201 |   while (dirname = extract_colon_unit (path, &idx))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|     char *dirname;",
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
                    "message": "  201|->   while (dirname = extract_colon_unit (path, &idx))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|         if (!strcmp (\"PATH\", dirname))",
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
                    "file_name": "texinfo-6.8/info/m-x.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_execute_command'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/m-x.c",
                    "line": 102,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |     asprintf (&prompt, \"%d %s \", count, keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|     if (info_explicit_arg || count != 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->     asprintf (&prompt, \"%d %s \", count, keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       asprintf (&prompt, \"%s \", keys);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/m-x.c",
                    "line": 104,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 |     asprintf (&prompt, \"%s \", keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|       asprintf (&prompt, \"%d %s \", count, keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|->     asprintf (&prompt, \"%s \", keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|     /* Ask the completer to read a reference for us. */",
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
                    "file_name": "texinfo-6.8/info/man.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_manpage_from_formatter'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/man.c",
                    "line": 309,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'pipe' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 |   pipe (pipes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|        writer end is pipes[1]. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|   #if PIPE_USE_FORK",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|->   pipe (pipes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|     child = fork ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/man.c",
                    "line": 328,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'freopen' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328 |       freopen (NULL_DEVICE, \"w\", stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|            of the pipe be stdout, and execute the man page formatter. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|         close (pipes[0]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|->       freopen (NULL_DEVICE, \"w\", stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|         freopen (NULL_DEVICE, \"r\", stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|         dup2 (pipes[1], fileno (stdout));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/man.c",
                    "line": 329,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'freopen' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329 |       freopen (NULL_DEVICE, \"r\", stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|         close (pipes[0]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|         freopen (NULL_DEVICE, \"w\", stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|->       freopen (NULL_DEVICE, \"r\", stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|         dup2 (pipes[1], fileno (stdout));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'check_loaded_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 565,
                    "column": 39,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565 |                 || filename[0] == '.' && IS_SLASH(filename[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|     /* If full path to the file has been given, we must find it exactly. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|     is_fullpath = IS_ABSOLUTE (filename)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|->                 || filename[0] == '.' && IS_SLASH(filename[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|     if (info_loaded_files)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_find_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 630,
                    "column": 39,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630 |                 || filename[0] == '.' && IS_SLASH(filename[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|        That is to say, search along INFOPATH and expand tildes, etc. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|     is_fullpath = IS_ABSOLUTE (filename)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|->                 || filename[0] == '.' && IS_SLASH(filename[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|     if (!is_fullpath)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|       fullpath = info_find_fullpath (filename, 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_node_of_tag_ext'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/nodes.c",
                    "line": 1308,
                    "column": 37,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'anchor_tag' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1308 |       node->display_pos = anchor_tag->nodestart_adjusted",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1306|         /* Start displaying the node at the anchor position.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1307|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1308|->       node->display_pos = anchor_tag->nodestart_adjusted",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1309|           - (tag->nodestart_adjusted",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1310|              + skip_node_separator (subfile->contents",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/pseudotty",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2111 with arguments: t/malformed-split.sh.pipeout",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/pseudotty.c",
                    "line": 114,
                    "event": "warning[SyscallParam]",
                    "message": "Syscall param ioctl(TIOCSWINSZ) points to uninitialised byte(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "texinfo-6.8/info/pseudotty.c",
                    "line": 114,
                    "event": "note",
                    "message": "Address 0x1ffeffef5c is on thread 1's stack",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from ioctl()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/pseudotty.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       error (0, 0, \"attempting to set window size\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|->     if (ioctl (master, TIOCSWINSZ, &ws) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|         error (0, 0, \"...succeeded\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|       else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'looking_at_newline.isra.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 1124,
                    "column": 24,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'iter.cur.wc_valid' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124 |   return mbi_cur (iter).wc_valid && mbi_cur (iter).wc == '\\n';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 1120,
                    "column": 18,
                    "event": "note",
                    "message": "'iter' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1120 |   mbi_iterator_t iter;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1122|   \t    win->node->nodelen - point);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1123|     mbi_avail (iter);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|->   return mbi_cur (iter).wc_valid && mbi_cur (iter).wc == '\\n';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'looking_at_alnum.isra.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 1136,
                    "column": 24,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'iter.cur.wc_valid' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136 |   return mbi_cur (iter).wc_valid && iswalnum (mbi_cur (iter).wc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 1131,
                    "column": 18,
                    "event": "note",
                    "message": "'iter' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131 |   mbi_iterator_t iter;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|     mbi_avail (iter);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136|->   return mbi_cur (iter).wc_valid && iswalnum (mbi_cur (iter).wc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1137|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1138|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'menu_digit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2214,
                    "column": 7,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around assignment used as truth value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2214 |   if (entry = select_menu_digit (window, key))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2212|   has_menu:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2213|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2214|->   if (entry = select_menu_digit (window, key))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2215|       info_select_reference (window, entry);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2216|     else if (key == '0')",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_menu_or_ref_item'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2311,
                    "column": 43,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2311 |       if (refs[which]->start >= this_line && refs[which]->start < next_line",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2309|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2310|         /* Reference is eligible if any part of it is in the line. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2311|->       if (refs[which]->start >= this_line && refs[which]->start < next_line",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2312|             || refs[which]->start < this_line && refs[which]->end > this_line)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2313|           {",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_follow_menus'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2767,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2767 |               asprintf (error, _(\"No menu in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2768 |                         node_printed_rep (initial_node));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2765|               {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2766|                 free (*error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2767|->               asprintf (error, _(\"No menu in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2768|                           node_printed_rep (initial_node));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2769|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2789,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2789 |               asprintf (error, _(\"No menu item '%s' in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2790 |                         arg, node_printed_rep (initial_node));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2787|               {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2788|                 free (*error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2789|->               asprintf (error, _(\"No menu item '%s' in node '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2790|                           arg, node_printed_rep (initial_node));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2791|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2813,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813 |               asprintf (error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814 |                         _(\"Unable to find node referenced by '%s' in '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815 |                         entry->label,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2816 |                         node_printed_rep (initial_node));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2811|               {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2812|                 free (*error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813|->               asprintf (error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814|                           _(\"Unable to find node referenced by '%s' in '%s'\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815|                           entry->label,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_handle_pointer'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2939,
                    "column": 3,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'description' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2939 |   info_parse_node (description);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2937|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2938|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2939|->   info_parse_node (description);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2940|     node = info_get_node_with_defaults (info_parsed_filename,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2941|                                         info_parsed_nodename,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'forward_move_node_structure'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3095,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around assignment used as truth value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3095 |             if (entry = select_menu_digit (window, '1'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3093|               REFERENCE *entry;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3094|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3095|->             if (entry = select_menu_digit (window, '1'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3096|                 {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3097|                   info_select_reference (window, entry);",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'find_invocation_node_by_nodename'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3394,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3394 |   asprintf (&try1, \"Invoking %s\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3392|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3393|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3394|->   asprintf (&try1, \"Invoking %s\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3395|     asprintf (&try2, \"%s invocation\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3396|     for (; *n; n++)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3395,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3395 |   asprintf (&try2, \"%s invocation\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3393|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3394|     asprintf (&try1, \"Invoking %s\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3395|->   asprintf (&try2, \"%s invocation\", program);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3396|     for (; *n; n++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3397|       {",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'ask_for_search_string'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 4204,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4204 |     asprintf (&prompt, _(\"%s%s%s [%s]: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4205 |              use_regex ? _(\"Regexp search\") : _(\"Search\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4206 |              case_sensitive ? _(\" case-sensitively\") : \"\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4207 |              direction < 0 ? _(\" backward\") : \"\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4208 |              search_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4202|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4203|     if (search_string)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4204|->     asprintf (&prompt, _(\"%s%s%s [%s]: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4205|                use_regex ? _(\"Regexp search\") : _(\"Search\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4206|                case_sensitive ? _(\" case-sensitively\") : \"\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 4210,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4210 |     asprintf (&prompt, _(\"%s%s%s: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4211 |              use_regex ? _(\"Regexp search\") : _(\"Search\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4212 |              case_sensitive ? _(\" case-sensitively\") : \"\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4213 |              direction < 0 ? _(\" backward\") : \"\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4208|                search_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4209|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4210|->     asprintf (&prompt, _(\"%s%s%s: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4211|                use_regex ? _(\"Regexp search\") : _(\"Search\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4212|                case_sensitive ? _(\" case-sensitively\") : \"\",",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'info_tree_search'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 4600,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4600 |   asprintf (&prompt, _(\"Search under %s: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4601 |             window->node->nodename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4598|     /* TODO: Display manual name */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4599|     /* TRANSLATORS: %s is the title of a node. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4600|->   asprintf (&prompt, _(\"Search under %s: \"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4601|               window->node->nodename);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4602|     line = info_read_in_echo_area (prompt); free (prompt);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'incremental_search'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 5127,
                    "column": 40,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5127 |           if (func == &isearch_forward && dir > 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5125|                insert the last search string that was accepted through",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5126|                incremental searching. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5127|->           if (func == &isearch_forward && dir > 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5128|                 || func == &isearch_backward && dir < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5129|               {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'read_key_sequence'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 5539,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5539 |       && (key >= 040 && key < 0200",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5538|     if (insert",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5539|->       && (key >= 040 && key < 0200",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5540|             || ISO_Latin_p && key >= 0200 && key < 0400))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5541|       {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/terminal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'terminal_switch_rendition'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/terminal.c",
                    "line": 648,
                    "column": 33,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around '&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648 |   else if (!(new & COLOUR_MASK) && (old & COLOUR_MASK)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646|         old = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|->   else if (!(new & COLOUR_MASK) && (old & COLOUR_MASK)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|              || !(new & BGCOLOUR_MASK) && (old & BGCOLOUR_MASK))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|       {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 665,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/terminal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'initialize_byte_map'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/terminal.c",
                    "line": 810,
                    "column": 14,
                    "event": "warning[-Wmissing-braces]",
                    "message": "missing braces around initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  810 |   } keys[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  808|         int key_id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  809|         char **byte_seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  810|->   } keys[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  811|         KEY_RIGHT_ARROW, &term_kr,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  812|         KEY_LEFT_ARROW, &term_kl,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 665,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/terminal.c",
                    "line": 829,
                    "column": 15,
                    "event": "warning[-Wmissing-braces]",
                    "message": "missing braces around initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829 |   } keys2[] = {",
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
                    "message": "  827|         int key_id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828|         char *byte_seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|->   } keys2[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|         KEY_RIGHT_ARROW, \"\\033[C\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|         KEY_RIGHT_ARROW, \"\\033OC\",",
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
                    "file_name": "texinfo-6.8/info/variables.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'describe_variable'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/variables.c",
                    "line": 232,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232 |     asprintf (&description, \"%s (%s): %s.\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233 |              var->name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234 |              var->value == &highlight_searches",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |              ? on_off_choices[match_rendition.mask != 0]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236 |              : var->choices == (char **) &rendition_choices",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237 |              ? rendition_to_string (var->value)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238 |              : var->choices[*(int *)var->value], _(var->doc));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|     if (var->choices)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|->     asprintf (&description, \"%s (%s): %s.\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|                var->name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|                var->value == &highlight_searches",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/variables.c",
                    "line": 240,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240 |     asprintf (&description, \"%s (%d): %s.\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241 |              var->name, *(int *)var->value, _(var->doc));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|                : var->choices[*(int *)var->value], _(var->doc));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|->     asprintf (&description, \"%s (%d): %s.\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|                var->name, *(int *)var->value, _(var->doc));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 665,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/variables.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'set_variable_to_value'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/variables.c",
                    "line": 462,
                    "column": 24,
                    "event": "warning[-Wmissing-braces]",
                    "message": "missing braces around initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462 |           } styles[] = {",
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
                    "message": "  460|                 unsigned long value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|                 char *name;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|->           } styles[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|                 COLOUR_MASK, COLOUR_BLACK,   \"black\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|                 COLOUR_MASK, COLOUR_RED,     \"red\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6539 with arguments: --name=* Gnu: (gnu). --description=A wildebeest native to the African savannah. --no-indent ../../install-info/tests/ii-0040-input-info-file ii40-psgpSzmm",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "15 bytes in 1 blocks are definitely lost in loss record 5 of 17",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2111,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6816 with arguments: ii54 input.info.gz ii54-QxXY2lsU",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "19 bytes in 1 blocks are definitely lost in loss record 5 of 14",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from xstrdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 415,
                    "event": "note",
                    "message": "called from strip_info_suffix()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2359,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6336 with arguments: --name=* Wildebeest: (gnu). --description=Wildebeest native to the African savannah. ../../install-info/tests/ii-0031-input-info-file ii31-z2k2gBqb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 1 blocks are definitely lost in loss record 5 of 18",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2111,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5694 with arguments: ../../install-info/tests/ii-0001-input-info-file ii01-ZEF4VHOY",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 7 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from xstrdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 415,
                    "event": "note",
                    "message": "called from strip_info_suffix()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2359,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5694 with arguments: ../../install-info/tests/ii-0001-input-info-file ii01-ZEF4VHOY",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "28,672 (20,480 direct, 8,192 indirect) bytes in 1 blocks are definitely lost in loss record 15 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2735,
                    "event": "note",
                    "message": "called from findlines()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6816 with arguments: ii54 input.info.gz ii54-QxXY2lsU",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 4 of 14",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 257,
                    "event": "note",
                    "message": "called from concat()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 857,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 909,
                    "event": "note",
                    "message": "called from readfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2371,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5695 with arguments: ../../install-info/tests/ii-0002-input-info-file ii02-aiBIt0rt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16 bytes in 1 blocks are possibly lost in loss record 4 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2828,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2633,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5694 with arguments: ../../install-info/tests/ii-0001-input-info-file ii01-ZEF4VHOY",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "20,480 bytes in 1 blocks are possibly lost in loss record 14 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2735,
                    "event": "note",
                    "message": "called from findlines()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2319,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5694 with arguments: ../../install-info/tests/ii-0001-input-info-file ii01-ZEF4VHOY",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,192 bytes in 1 blocks are possibly lost in loss record 12 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 906,
                    "event": "note",
                    "message": "called from readfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2301,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6586 with arguments: ../../install-info/tests/ii-0042-input-info-file ii42-xWs9Yqrl",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 72,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16 bytes in 1 blocks are possibly lost in loss record 3 of 15",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 72,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2698,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       }",
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
                    "message": "   72|->   void *r = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     if (!r && (n || (HAVE_GNU_REALLOC && !p)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "../../install-info/ginstall-info",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5775 with arguments: ../../install-info/tests/ii-0005-input-info-file ii05-BNHAr5p9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 72,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8 bytes in 1 blocks are possibly lost in loss record 3 of 16",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "texinfo-6.8/install-info/../gnulib/lib/xmalloc.c",
                    "line": 72,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 2698,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       }",
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
                    "message": "   72|->   void *r = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     if (!r && (n || (HAVE_GNU_REALLOC && !p)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       xalloc_die ();",
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
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'output_dirfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/install-info/install-info.c",
                    "line": 959,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  959 |   asprintf (&dirfile_tmp, \"%s.tmp\", dirfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  957|     char *dirfile_tmp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  958|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  959|->   asprintf (&dirfile_tmp, \"%s.tmp\", dirfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960|     if (!dirfile_tmp)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
