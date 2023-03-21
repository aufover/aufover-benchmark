{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "texinfo-6.8-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/symbiotic/output",
        "time-created": "2023-01-30 06:58:49",
        "time-finished": "2023-01-30 07:13:38",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/texinfo-6.8-2.fc35/texinfo-6.8-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "texinfo-6.8/info/infokey.c",
                    "line": 380,
                    "column": 7,
                    "event": "warning[-Wtautological-constant-out-of-range-compare]",
                    "message": "result of comparison of constant 271 with expression of type 'char' is always true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    To_seq (oval);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/infokey.c",
                    "line": 223,
                    "column": 30,
                    "event": "note",
                    "message": "expanded from macro 'To_seq'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      seq[slen++] = meta ? KEYMAP_META(c) : (c); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/infomap.h",
                    "line": 105,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'KEYMAP_META'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define KEYMAP_META(k) ((k) < KEYMAP_META_BASE ? (k) + KEYMAP_META_BASE : (k))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ~~~ ^ ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|   \t\t  if (oval)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|-> \t\t    To_seq (oval);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t\t  else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   \t\t    {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/infopath.c",
                    "line": 201,
                    "column": 18,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (dirname = extract_colon_unit (path, &idx))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/infopath.c",
                    "line": 201,
                    "column": 18,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (dirname = extract_colon_unit (path, &idx))",
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
                    "file_name": "texinfo-6.8/info/infopath.c",
                    "line": 201,
                    "column": 18,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (dirname = extract_colon_unit (path, &idx))",
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
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2214,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (entry = select_menu_digit (window, key))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2214,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (entry = select_menu_digit (window, key))",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2214,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (entry = select_menu_digit (window, key))",
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
            "cwe": 197,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2411,
                    "column": 30,
                    "event": "warning[-Wabsolute-value]",
                    "message": "absolute value function 'abs' given an argument of type 'long' but has parameter of type 'int' which may cause truncation of value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  int dist = abs (window->point - ref->end);",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 2411,
                    "column": 30,
                    "event": "note",
                    "message": "use function 'labs' instead",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  int dist = abs (window->point - ref->end);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2409|                     /* ref->end is more accurate estimate of position",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2410|                        for menus than ref->start.  Go figure.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2411|->                   int dist = abs (window->point - ref->end);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2412|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2413|                     if (dist < min_dist)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3095,
                    "column": 23,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (entry = select_menu_digit (window, '1'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3095,
                    "column": 23,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (entry = select_menu_digit (window, '1'))",
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
                    "file_name": "texinfo-6.8/info/session.c",
                    "line": 3095,
                    "column": 23,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (entry = select_menu_digit (window, '1'))",
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
        }
    ]
}
