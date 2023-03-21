{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "bash-5.1.8-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/divine/output",
        "time-created": "2023-01-26 21:45:59",
        "time-finished": "2023-01-26 21:54:02",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/bash-5.1.8-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
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
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 580,
                    "column": 20,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; line = defs->lines->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 580,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; line = defs->lines->array[i]; i++)",
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
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 580,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; line = defs->lines->array[i]; i++)",
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
                    "message": "  578|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  579|     /* Process each line in the array. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  580|->   for (i = 0; line = defs->lines->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|         defs->line_number = i;",
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
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 696,
                    "column": 27,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (i = 0; builtin = (BUILTIN_DESC *)defs->builtins->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 696,
                    "column": 27,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (i = 0; builtin = (BUILTIN_DESC *)defs->builtins->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 696,
                    "column": 27,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (i = 0; builtin = (BUILTIN_DESC *)defs->builtins->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|     if (defs->builtins)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->       for (i = 0; builtin = (BUILTIN_DESC *)defs->builtins->array[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|   \t  free_builtin (builtin);",
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
                    "file_name": "bash-5.1/findcmd.c",
                    "line": 137,
                    "column": 46,
                    "event": "warning",
                    "message": "implicit declaration of function 'eaccess' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (exec_name_should_ignore (name) == 0 && eaccess (name, X_OK) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|        user and group IDs, not the real ones.  We could use sh_eaccess,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|        but we don't want any special treatment for /dev/fd. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|->   if (exec_name_should_ignore (name) == 0 && eaccess (name, X_OK) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|       r |= FS_EXECABLE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|     if (eaccess (name, R_OK) == 0)",
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
                    "file_name": "bash-5.1/findcmd.c",
                    "line": 269,
                    "column": 11,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (var = find_variable_tempenv (\"PATH\"))     /* XXX could be array? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/findcmd.c",
                    "line": 269,
                    "column": 11,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (var = find_variable_tempenv (\"PATH\"))     /* XXX could be array? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/findcmd.c",
                    "line": 269,
                    "column": 11,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (var = find_variable_tempenv (\"PATH\"))     /* XXX could be array? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|     /* Search for the value of PATH in both the temporary environments and",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|        in the regular list of variables. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|->   if (var = find_variable_tempenv (\"PATH\"))\t/* XXX could be array? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|       path_list = value_cell (var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|     else",
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
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 2151,
                    "column": 12,
                    "event": "warning",
                    "message": "'&&' within '||'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        while (*c && *c != '\\n' || lvl > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ~~~^~~~~~~~~~~~~ ~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 2151,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the '&&' expression to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        while (*c && *c != '\\n' || lvl > 0) {",
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
                    "message": " 2149|   \tint     lvl = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2150|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2151|-> \twhile (*c && *c != '\\n' || lvl > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2152|   \t\tif (*c == '\\\\') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2153|   \t\t\tc++;",
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
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 3693,
                    "column": 44,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                for (i = 0; owndef->st[deflen + 2 + i] = owndef->st[i]; i++);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 3693,
                    "column": 44,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                for (i = 0; owndef->st[deflen + 2 + i] = owndef->st[i]; i++);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 3693,
                    "column": 44,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                for (i = 0; owndef->st[deflen + 2 + i] = owndef->st[i]; i++);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3691|   \t\t\t\t\twordlist[i] = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3692|   \t\t\t\tdeflen = strlen(owndef->st);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3693|-> \t\t\t\tfor (i = 0; owndef->st[deflen + 2 + i] = owndef->st[i]; i++);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3694|   \t\t\t\toldargument = argument;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3695|   \t\t\t\targument = wordlist;",
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
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 271,
                    "column": 14,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 271,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
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
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 271,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|     found = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|->   while (elt = unwind_protect_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|         unwind_protect_list = unwind_protect_list->head.next;",
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
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 306,
                    "column": 14,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 306,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
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
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 306,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (elt = unwind_protect_list)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|     found = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|->   while (elt = unwind_protect_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|         unwind_protect_list = elt->head.next;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
