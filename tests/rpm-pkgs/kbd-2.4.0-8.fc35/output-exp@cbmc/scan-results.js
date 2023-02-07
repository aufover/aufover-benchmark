{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "kbd-2.4.0-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/kbd-2.4.0-8.fc35/cbmc/output",
        "time-created": "2023-01-27 01:03:47",
        "time-finished": "2023-01-27 01:15:36",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/kbd-2.4.0-8.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/kbd-2.4.0-8.fc35/kbd-2.4.0-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'yytnamerr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.c",
                    "line": 1057,
                    "column": 34,
                    "event": "warning[-Wsign-conversion]",
                    "message": "conversion to 'long unsigned int' from 'long int' may change the sign of the result",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1057 |   return yystpcpy (yyres, yystr) - yyres;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1055|       return yystrlen (yystr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1056|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1057|->   return yystpcpy (yyres, yystr) - yyres;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1058|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1059|   # endif",
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
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'yyparse'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.c",
                    "line": 1305,
                    "column": 12,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'int' to 'yytype_int16' {aka 'short int'} may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1305 |   *yyssp = yystate;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1304|    yysetstate:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1305|->   *yyssp = yystate;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1306|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1307|     if (yyss + yystacksize - 1 <= yyssp)",
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
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.c",
                    "line": 1310,
                    "column": 25,
                    "event": "warning[-Wsign-conversion]",
                    "message": "conversion to 'long unsigned int' from 'long int' may change the sign of the result",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1310 |       YYSIZE_T yysize = yyssp - yyss + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkeymap/parser.y",
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
                    "message": " 1308|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1309|         /* Get the current used size of the three stacks, in elements.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1310|->       YYSIZE_T yysize = yyssp - yyss + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1311|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1312|   #ifdef yyoverflow",
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
                    "file_name": "kbd-2.4.0/src/libkfont/loadunimap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'parseline'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/loadunimap.c",
                    "line": 220,
                    "column": 66,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'int' to 'short unsigned int' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |                         if ((ret = add_unipair(ctx, i, un0 - fp0 + i, list, listsz, listct)) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        ~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/loadunimap.c",
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
                    "message": "  218|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|   \t\tfor (i = fp0; i <= fp1; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|-> \t\t\tif ((ret = add_unipair(ctx, i, un0 - fp0 + i, list, listsz, listct)) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   \t\t\t\treturn ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   \t\t}",
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
                    "file_name": "kbd-2.4.0/src/libkfont/mapscrn.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'kfont_load_consolemap'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/mapscrn.c",
                    "line": 163,
                    "column": 27,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unsigned int' to 'unsigned char' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163 |                 buf[i]  = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|   \t/* default: trivial straight-to-font */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   \tfor (i = 0; i < E_TABSZ; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|-> \t\tbuf[i]  = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|   \t\tubuf[i] = (0xf000 + i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|   \t}",
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
                    "file_name": "kbd-2.4.0/src/libkfont/mapscrn.c",
                    "line": 164,
                    "column": 27,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unsigned int' to 'short unsigned int' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 |                 ubuf[i] = (0xf000 + i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/mapscrn.c",
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
                    "message": "  162|   \tfor (i = 0; i < E_TABSZ; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   \t\tbuf[i]  = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|-> \t\tubuf[i] = (0xf000 + i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   ",
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
                    "file_name": "kbd-2.4.0/src/libkfont/psffontop.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'writepsffontheader'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/psffontop.c",
                    "line": 460,
                    "column": 30,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unsigned int' to 'unsigned char' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460 |                 h.charsize = charsize;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/psffontop.c",
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
                    "message": "  458|   \t\telse if (flags & WPSFH_HASTAB)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|   \t\t\th.mode |= PSF1_MODEHASTAB;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|-> \t\th.charsize = charsize;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|   \t\tret = fwrite(&h, sizeof(h), 1, ofil);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|   \t}",
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
                    "file_name": "kbd-2.4.0/src/libkfont/setfont.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_loadtable'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/setfont.c",
                    "line": 220,
                    "column": 50,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unicode' {aka 'int'} to 'short unsigned int' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |                                 up[ct].unicode = us->uc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   \t\t\tus = ul->seq;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|   \t\t\tif (us && !us->next) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|-> \t\t\t\tup[ct].unicode = us->uc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   \t\t\t\tup[ct].fontpos = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   \t\t\t\tct++;",
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
                    "file_name": "kbd-2.4.0/src/libkfont/setfont.c",
                    "line": 221,
                    "column": 50,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unsigned int' to 'short unsigned int' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221 |                                 up[ct].fontpos = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|   \t\t\tif (us && !us->next) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|   \t\t\t\tup[ct].unicode = us->uc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|-> \t\t\t\tup[ct].fontpos = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   \t\t\t\tct++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|   \t\t\t\tif (ctx->verbose > 1)",
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
                    "file_name": "kbd-2.4.0/src/libkfont/setfont.c",
                    "line": 250,
                    "column": 23,
                    "event": "warning[-Wconversion]",
                    "message": "conversion from 'unsigned int' to 'short unsigned int' may change value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250 |         ud.entry_ct = ct;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/src/libkfont/setfont.c",
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
                    "message": "  248|   \t\tKFONT_INFO(ctx, _(\"Loading Unicode mapping table...\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|-> \tud.entry_ct = ct;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   \tud.entries  = up;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|   ",
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
                    "file_name": "kbd-2.4.0/tests/helpers/libkeymap-showmaps.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/helpers/libkeymap-showmaps.c",
                    "line": 36,
                    "column": 41,
                    "event": "warning[-Wsign-conversion]",
                    "message": "conversion to 'int' from 'unsigned int' may change the sign of the result",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36 |                 if (!lk_map_exists(ctx, i))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/helpers/libkeymap-showmaps.c",
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
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \tfor (i = 0; i < ctx->keymap->total; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|-> \t\tif (!lk_map_exists(ctx, i))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   \t\t\tcontinue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   \t\tprintf(\"keymap %03d\\n\", i);",
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
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test07.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test07.c",
                    "line": 43,
                    "column": 41,
                    "event": "warning[-Wsign-conversion]",
                    "message": "conversion to 'int' from 'unsigned int' may change the sign of the result",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 |                 int c = lk_get_key(ctx, i, 17);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test07.c",
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
                    "message": "   41|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \twhile (i < MAX_NR_KEYMAPS) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|-> \t\tint c = lk_get_key(ctx, i, 17);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   \t\tif (KVAL(c) != 'x')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   \t\t\tkbd_error(EXIT_FAILURE, 0, \"Unable to get keycode\");",
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
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test08.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test08.c",
                    "line": 44,
                    "column": 41,
                    "event": "warning[-Wsign-conversion]",
                    "message": "conversion to 'int' from 'unsigned int' may change the sign of the result",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44 |                 int c = lk_get_key(ctx, i, 17);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test08.c",
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
                    "message": "   42|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   \tfor (i = 0; i < 26; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|-> \t\tint c = lk_get_key(ctx, i, 17);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   \t\tif (KVAL(c) != str[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   \t\t\tkbd_error(EXIT_FAILURE, 0, \"Unable to get keycode\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 192,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test16.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test16.c",
                    "line": 18,
                    "column": 34,
                    "event": "warning[-Wenum-conversion]",
                    "message": "implicit conversion from 'enum <anonymous>' to 'lk_flags'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18 |         lk_set_parser_flags(ctx, LK_KEYWORD_ALTISMETA);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "kbd-2.4.0/tests/libkeymap/libkeymap-test16.c",
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
                    "message": "   16|   \tctx = lk_init();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|   \tlk_set_log_fn(ctx, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18|-> \tlk_set_parser_flags(ctx, LK_KEYWORD_ALTISMETA);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   \tif (lk_add_key(ctx, 0, 0, 16) != 0)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
