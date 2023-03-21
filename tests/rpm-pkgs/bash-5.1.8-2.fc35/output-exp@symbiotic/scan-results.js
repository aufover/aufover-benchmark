{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "bash-5.1.8-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/symbiotic/output",
        "time-created": "2023-01-31 09:03:55",
        "time-finished": "2023-01-31 12:07:33",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/bash-5.1.8-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/bashhist.c",
                    "line": 726,
                    "column": 15,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = previous_history ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashhist.c",
                    "line": 726,
                    "column": 15,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = previous_history ())",
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
                    "file_name": "bash-5.1/bashhist.c",
                    "line": 726,
                    "column": 15,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = previous_history ())",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|     using_history ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|->   while (temp = previous_history ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  727|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  728|         if (STREQ (temp->line, line))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 796,
                    "column": 15,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = fgets (buffer, 255, file))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 796,
                    "column": 15,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = fgets (buffer, 255, file))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 796,
                    "column": 15,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (temp = fgets (buffer, 255, file))",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|       return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|->   while (temp = fgets (buffer, 255, file))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|         /* Skip to first character. */",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 1637,
                    "column": 29,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (was_assignment = assignment (n, 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 1637,
                    "column": 29,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (was_assignment = assignment (n, 0));",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 1637,
                    "column": 29,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (was_assignment = assignment (n, 0));",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1635|   \t  s = e1 + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1636|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1637|->       while (was_assignment = assignment (n, 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1638|         s = s1;\t\t/* reset to index where name begins */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1639|   ",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2131,
                    "column": 18,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (val = glob_matches[local_index++])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2131,
                    "column": 18,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (val = glob_matches[local_index++])",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2131,
                    "column": 18,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (val = glob_matches[local_index++])",
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
                    "message": " 2129|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2130|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2131|->       while (val = glob_matches[local_index++])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2132|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2133|   \t  if (executable_or_directory (val))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2525,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (srvent = getservent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2525,
                    "column": 17,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (srvent = getservent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2525,
                    "column": 17,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (srvent = getservent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2523|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2524|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2525|->   while (srvent = getservent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2526|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2527|         afound = 0;",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2581,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (grent = getgrent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2581,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (grent = getgrent ())",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 2581,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (grent = getgrent ())",
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
                    "message": " 2579|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2580|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2581|->   while (grent = getgrent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2582|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2583|         if (gnamelen == 0 || (STREQN (gname, grent->gr_name, gnamelen)))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3295,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3295,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3295,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
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
                    "message": " 3293|     local_dirname = *dirname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3294|     should_expand_dirname = return_value = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3295|->   if (t = mbschr (local_dirname, '$'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3296|       should_expand_dirname = '$';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3297|     else if (t = mbschr (local_dirname, '`'))\t/* XXX */",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3297,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (t = mbschr (local_dirname, '`'))     /* XXX */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3297,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (t = mbschr (local_dirname, '`'))     /* XXX */",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3297,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (t = mbschr (local_dirname, '`'))     /* XXX */",
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
                    "message": " 3295|     if (t = mbschr (local_dirname, '$'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3296|       should_expand_dirname = '$';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3297|->   else if (t = mbschr (local_dirname, '`'))\t/* XXX */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3298|       should_expand_dirname = '`';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3299|   ",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3375,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3375,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3375,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (local_dirname, '$'))",
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
                    "message": " 3373|     local_dirname = *dirname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3374|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3375|->   if (t = mbschr (local_dirname, '$'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3376|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3377|         should_expand_dirname = '$';",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3433,
                    "column": 26,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              for (i = j = 0; c = default_filename_quote_characters[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3433,
                    "column": 26,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              for (i = j = 0; c = default_filename_quote_characters[i]; i++)",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 3433,
                    "column": 26,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              for (i = j = 0; c = default_filename_quote_characters[i]; i++)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3431|   \t      i = strlen (default_filename_quote_characters);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3432|   \t      custom_filename_quote_characters = xrealloc (custom_filename_quote_characters, i+1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3433|-> \t      for (i = j = 0; c = default_filename_quote_characters[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3434|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3435|   \t\t  if (c == should_expand_dirname || c == nextch || c == closer)",
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
                    "file_name": "bash-5.1/bashline.c",
                    "line": 4470,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (passc = 0; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4468|       *startp = delim ? ++i : i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4469|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4470|->   for (passc = 0; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4471|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4472|         if (passc)",
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
                    "file_name": "bash-5.1/braces.c",
                    "line": 435,
                    "column": 10,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (t = (char *)malloc (2))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/braces.c",
                    "line": 435,
                    "column": 10,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (t = (char *)malloc (2))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/braces.c",
                    "line": 435,
                    "column": 10,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (t = (char *)malloc (2))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|-> \t  if (t = (char *)malloc (2))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|   \t      t[0] = n;",
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
                    "file_name": "bash-5.1/braces.c",
                    "line": 615,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = text[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/braces.c",
                    "line": 615,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = text[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/braces.c",
                    "line": 615,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = text[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|     i = *indx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|->   while (c = text[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|         if (pass_next)",
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
                    "file_name": "bash-5.1/builtins/cd.def",
                    "line": 370,
                    "column": 19,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (path = extract_colon_unit (cdpath, &path_index))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/cd.def",
                    "line": 370,
                    "column": 19,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (path = extract_colon_unit (cdpath, &path_index))",
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
                    "file_name": "bash-5.1/builtins/cd.def",
                    "line": 370,
                    "column": 19,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (path = extract_colon_unit (cdpath, &path_index))",
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
                    "message": "  368|         /* Find directory in $CDPATH. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|         path_index = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|->       while (path = extract_colon_unit (cdpath, &path_index))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|   \t  /* OPT is 1 if the path element is non-empty */",
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
                    "file_name": "bash-5.1/builtins/echo.def",
                    "line": 141,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (i = *temp++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/echo.def",
                    "line": 141,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (i = *temp++)",
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
                    "file_name": "bash-5.1/builtins/echo.def",
                    "line": 141,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (i = *temp++)",
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
                    "message": "  139|         /* All of the options in TEMP are valid options to ECHO.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   \t Handle them. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->       while (i = *temp++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|   \t  switch (i)",
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
                    "file_name": "bash-5.1/builtins/evalstring.c",
                    "line": 402,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (command = global_command)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~~~~~~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/evalstring.c",
                    "line": 402,
                    "column": 21,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (command = global_command)",
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
                    "file_name": "bash-5.1/builtins/evalstring.c",
                    "line": 402,
                    "column": 21,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (command = global_command)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|   \t      global_command = (COMMAND *)NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|   \t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|-> \t  else if (command = global_command)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|   \t      struct fd_bitmap *bitmap;",
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
                    "file_name": "bash-5.1/builtins/getopt.c",
                    "line": 182,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (sh_badopt = (temp == NULL || c == ':'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/getopt.c",
                    "line": 182,
                    "column": 17,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (sh_badopt = (temp == NULL || c == ':'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/getopt.c",
                    "line": 182,
                    "column": 17,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (sh_badopt = (temp == NULL || c == ':'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|->   if (sh_badopt = (temp == NULL || c == ':'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|         if (sh_opterr)",
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
                    "file_name": "bash-5.1/builtins/help.def",
                    "line": 145,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; name = shell_builtins[i].name; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/help.def",
                    "line": 145,
                    "column": 21,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; name = shell_builtins[i].name; i++)",
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
                    "file_name": "bash-5.1/builtins/help.def",
                    "line": 145,
                    "column": 21,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; name = shell_builtins[i].name; i++)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|         for (pass = 1, this_found = 0; pass < 3; pass++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|-> \t  for (i = 0; name = shell_builtins[i].name; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   \t      QUIT;",
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
                    "line": 580,
                    "column": 20,
                    "event": "warning",
                    "message": "using the result of an assignment as a condition without parentheses [-Wparentheses]mkbuiltins.c",
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
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/builtins/mkbuiltins.c",
                    "line": 696,
                    "column": 27,
                    "event": "warning[-Wparentheses]",
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
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 617,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 617,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 617,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
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
                    "message": "  615|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|     vptr = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|->   while (vname = extract_colon_unit (value, &vptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|         set_minus_o_option (FLAG_ON, vname);",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 742,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          while (flag_name = *++arg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 742,
                    "column": 21,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          while (flag_name = *++arg)",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 742,
                    "column": 21,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          while (flag_name = *++arg)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|         if ((on_or_off = *arg) && (on_or_off == '-' || on_or_off == '+'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  741|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|-> \t  while (flag_name = *++arg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  743|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|   \t      if (flag_name == '?')",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 946,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (var = find_function (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 946,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (var = find_function (name))",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 946,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (var = find_function (name))",
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
                    "message": "  944|         if (var == 0 && nameref == 0 &&  unset_variable == 0 && unset_function == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  945|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  946|-> \t  if (var = find_function (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|   \t    unset_function = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|   \t}",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 985,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (var = array_variable_part (tname, 0, &t, (int *)0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 985,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (var = array_variable_part (tname, 0, &t, (int *)0))",
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
                    "file_name": "bash-5.1/builtins/set.def",
                    "line": 985,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (var = array_variable_part (tname, 0, &t, (int *)0))",
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
                    "message": "  983|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|   \t\t  tname = savestring (nameref_cell (var));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|-> \t\t  if (var = array_variable_part (tname, 0, &t, (int *)0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t    tem = unbind_array_element (var, t, vflags);\t/* XXX new third arg */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|   \t\t  free (tname);",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 320,
                    "column": 20,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 320,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; var = variable_list[i]; i++)",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 320,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (i = 0; var = variable_list[i]; i++)",
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
                    "message": "  318|         if (variable_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|-> \t  for (i = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   #if defined (ARRAY_VARS)",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 337,
                    "column": 20,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 337,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 337,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t\t  show_var_attributes (var, READONLY_OR_EXPORT, nodefs);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> \t\t  if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   \t\t    break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   \t\t}",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 364,
                    "column": 32,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 364,
                    "column": 32,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 364,
                    "column": 32,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|       return (EXECUTION_SUCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|->   for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|         show_var_attributes (var, READONLY_OR_EXPORT, nodefs);",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 367,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 367,
                    "column": 22,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 367,
                    "column": 22,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
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
                    "message": "  365|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|         show_var_attributes (var, READONLY_OR_EXPORT, nodefs);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|->       if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|       }",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 388,
                    "column": 32,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 388,
                    "column": 32,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 388,
                    "column": 32,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|       return (EXECUTION_SUCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|->   for (i = any_failed = 0; var = variable_list[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|         show_var_attributes (var, READONLY_OR_EXPORT, nodefs);",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 391,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 391,
                    "column": 22,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
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
                    "file_name": "bash-5.1/builtins/setattr.def",
                    "line": 391,
                    "column": 22,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (any_failed = sh_chkwrite (any_failed))",
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
                    "message": "  389|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|         show_var_attributes (var, READONLY_OR_EXPORT, nodefs);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|->       if (any_failed = sh_chkwrite (any_failed))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|       }",
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
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 458,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (\"BASHOPTS\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 458,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (\"BASHOPTS\"))",
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
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 458,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (\"BASHOPTS\"))",
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
                    "message": "  456|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|     /* Don't set $BASHOPTS here if it hasn't already been initialized */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|->   if (v = find_variable (\"BASHOPTS\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|       set_bashopts ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|     return (rval);",
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
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 862,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 862,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
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
                    "file_name": "bash-5.1/builtins/shopt.def",
                    "line": 862,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (vname = extract_colon_unit (value, &vptr))",
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
                    "message": "  860|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|     vptr = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  862|->   while (vname = extract_colon_unit (value, &vptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  863|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  864|         ind = find_shopt (vname);",
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
                    "file_name": "bash-5.1/builtins/type.def",
                    "line": 338,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (full_path = phash_search (command))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/type.def",
                    "line": 338,
                    "column": 21,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (full_path = phash_search (command))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/builtins/type.def",
                    "line": 338,
                    "column": 21,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (full_path = phash_search (command))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|     if (all == 0 || (dflags & CDESC_FORCE_PATH))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|->       if (full_path = phash_search (command))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|   \t  if (dflags & CDESC_TYPE)",
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
                    "file_name": "bash-5.1/eval.c",
                    "line": 147,
                    "column": 29,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (current_command = global_command)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/eval.c",
                    "line": 147,
                    "column": 29,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (current_command = global_command)",
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
                    "file_name": "bash-5.1/eval.c",
                    "line": 147,
                    "column": 29,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          else if (current_command = global_command)",
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
                    "message": "  145|   \t      global_command = (COMMAND *)NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|   \t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|-> \t  else if (current_command = global_command)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \t      global_command = (COMMAND *)NULL;",
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
                    "file_name": "bash-5.1/findcmd.c",
                    "line": 269,
                    "column": 11,
                    "event": "warning[-Wparentheses]",
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
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/general.c",
                    "line": 457,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[indx])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/general.c",
                    "line": 457,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[indx])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/general.c",
                    "line": 457,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[indx])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|       return (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|->   while (c = string[indx])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|         /* The following is safe.  Note that '=' at the start of a word",
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
                    "file_name": "bash-5.1/jobs.c",
                    "line": 1464,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (temp = jobs[job_index])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/jobs.c",
                    "line": 1464,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (temp = jobs[job_index])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/jobs.c",
                    "line": 1464,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (temp = jobs[job_index])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1462|       return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1463|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1464|->   if (temp = jobs[job_index])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1465|       temp->flags |= J_NOHUP;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1466|   }",
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
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 230,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 230,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 230,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|     /* check every subpattern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|->   while (t = glob_patscan (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|         n = t[-1];\t/* ( */",
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
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 348,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan_wc (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 348,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan_wc (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/glob.c",
                    "line": 348,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (t = glob_patscan_wc (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|     /* check every subpattern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|->   while (t = glob_patscan_wc (pp, pe, '|'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|         n = t[-1];\t/* ( */",
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
                    "file_name": "bash-5.1/lib/glob/gmisc.c",
                    "line": 57,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/gm_loop.c",
                    "line": 85,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *pat++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/gm_loop.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *pat++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/gm_loop.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *pat++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
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
                    "message": "   84|     matlen = in_cclass = in_collsym = in_equiv = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|->   while (c = *pat++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|         switch (c)",
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
                    "file_name": "bash-5.1/lib/glob/smatch.c",
                    "line": 330,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 404,
                    "column": 11,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (not = (*p == L('!') || *p == L('^')))",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 404,
                    "column": 11,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (not = (*p == L('!') || *p == L('^')))",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 404,
                    "column": 11,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (not = (*p == L('!') || *p == L('^')))",
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
                    "message": "  402|        expression starting with an unquoted circumflex character produces",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|        unspecified results.  This implementation treats the two identically. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|->   if (not = (*p == L('!') || *p == L('^')))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|       ++p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|   ",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 683,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 683,
                    "column": 22,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 683,
                    "column": 22,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
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
                    "message": "  681|       return (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  682|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  683|->   for (s = string; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  684|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  685|         if (s >= end)",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 894,
                    "column": 15,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (m1 = (GMATCH (s, srest, psub, pnext - 1, NULL, flags) == 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 894,
                    "column": 15,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (m1 = (GMATCH (s, srest, psub, pnext - 1, NULL, flags) == 0))",
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
                    "file_name": "bash-5.1/lib/glob/sm_loop.c",
                    "line": 894,
                    "column": 15,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (m1 = (GMATCH (s, srest, psub, pnext - 1, NULL, flags) == 0))",
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
                    "message": "  892|   \t      pnext = PATSCAN (psub, pe, L('|'));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|   \t      /* If one of the patterns matches, just bail immediately. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  894|-> \t      if (m1 = (GMATCH (s, srest, psub, pnext - 1, NULL, flags) == 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895|   \t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|   \t      if (pnext == prest)",
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
                    "file_name": "bash-5.1/lib/glob/smatch.c",
                    "line": 525,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (p = strchr (p, '['))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/smatch.c",
                    "line": 525,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (p = strchr (p, '['))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/glob/smatch.c",
                    "line": 525,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (p = strchr (p, '['))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|     p = pattern;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|->   while (p = strchr (p, '['))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527|         if (p[1] != ':')",
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
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 1496,
                    "column": 31,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = start,passc = 0; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 1496,
                    "column": 31,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = start,passc = 0; c = string[i]; i++)",
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
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 1496,
                    "column": 31,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = start,passc = 0; c = string[i]; i++)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1494|     int i, c, passc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1495|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1496|->   for (i = start,passc = 0; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1497|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1498|         if (passc)",
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
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 2694,
                    "column": 20,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; name = names[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 2694,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; name = names[i]; i++)",
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
                    "file_name": "bash-5.1/lib/readline/bind.c",
                    "line": 2694,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0; name = names[i]; i++)",
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
                    "message": " 2692|     fprintf (rl_outstream, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2693|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2694|->   for (i = 0; name = names[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2695|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2696|         rl_command_func_t *function;",
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
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 1149,
                    "column": 23,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (rl_point = MB_PREVCHAR (rl_line_buffer, rl_point, MB_FIND_ANY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 1149,
                    "column": 23,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (rl_point = MB_PREVCHAR (rl_line_buffer, rl_point, MB_FIND_ANY))",
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
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 1149,
                    "column": 23,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (rl_point = MB_PREVCHAR (rl_line_buffer, rl_point, MB_FIND_ANY))",
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
                    "message": " 1147|            completion, so use the word break characters to find the",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1148|            substring on which to complete. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1149|->       while (rl_point = MB_PREVCHAR (rl_line_buffer, rl_point, MB_FIND_ANY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1150|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|   \t  scan = rl_line_buffer[rl_point];",
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
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2217,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (string = (*entry_function) (text, matches))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2217,
                    "column": 17,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (string = (*entry_function) (text, matches))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2217,
                    "column": 17,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (string = (*entry_function) (text, matches))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2215|     match_list[1] = (char *)NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2216|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2217|->   while (string = (*entry_function) (text, matches))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2218|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2219|         if (RL_SIG_RECEIVED ())",
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
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2289,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (entry = getpwent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2289,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (entry = getpwent ())",
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
                    "file_name": "bash-5.1/lib/readline/complete.c",
                    "line": 2289,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (entry = getpwent ())",
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
                    "message": " 2287|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2288|   #if defined (HAVE_GETPWENT)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2289|->   while (entry = getpwent ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2290|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2291|         /* Null usernames should result in all users as possible completions. */",
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
                    "file_name": "bash-5.1/lib/readline/histexpand.c",
                    "line": 213,
                    "column": 27,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (local_index = i; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/histexpand.c",
                    "line": 213,
                    "column": 27,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (local_index = i; c = string[i]; i++)",
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
                    "file_name": "bash-5.1/lib/readline/histexpand.c",
                    "line": 213,
                    "column": 27,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (local_index = i; c = string[i]; i++)",
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
                    "message": "  211|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|     /* Only a closing `?' or a newline delimit a substring search string. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|->   for (local_index = i; c = string[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|   #if defined (HANDLE_MULTIBYTE)",
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
                    "file_name": "bash-5.1/lib/readline/histsearch.c",
                    "line": 212,
                    "column": 27,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (unescaped_backslash = (string[ret] == '\\\\'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/histsearch.c",
                    "line": 212,
                    "column": 27,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (unescaped_backslash = (string[ret] == '\\\\'))",
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
                    "file_name": "bash-5.1/lib/readline/histsearch.c",
                    "line": 212,
                    "column": 27,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (unescaped_backslash = (string[ret] == '\\\\'))",
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
                    "message": "  210|     /* fnmatch is required to reject a pattern that ends with an unescaped",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|        backslash */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|->   if (unescaped_backslash = (string[ret] == '\\\\'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|         while (ret > 0 && string[--ret] == '\\\\')",
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
                    "file_name": "bash-5.1/lib/readline/input.c",
                    "line": 486,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = _rl_next_macro_key ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/input.c",
                    "line": 486,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = _rl_next_macro_key ())",
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
                    "file_name": "bash-5.1/lib/readline/input.c",
                    "line": 486,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = _rl_next_macro_key ())",
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
                    "message": "  484|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|         /* If input is coming from a macro, then use that. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|->       if (c = _rl_next_macro_key ())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|   \treturn ((unsigned char)c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   ",
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
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 450,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)entry->data)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 450,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)entry->data)",
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
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 450,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)entry->data)",
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
                    "message": "  448|     while (entry)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|->       if (ul = (UNDO_LIST *)entry->data)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|   \t  if (ul == saved_undo_list)",
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
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 510,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)hent->data)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 510,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)hent->data)",
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
                    "file_name": "bash-5.1/lib/readline/misc.c",
                    "line": 510,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (ul = (UNDO_LIST *)hent->data)",
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
                    "message": "  508|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|         hent = hlist[i];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|->       if (ul = (UNDO_LIST *)hent->data)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|   \t  if (ul == saved_undo_list)",
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
                    "file_name": "bash-5.1/lib/readline/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/readline/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
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
                    "file_name": "bash-5.1/lib/readline/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
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
                    "message": "  193|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|     result_index = result_size = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|->   if (result = strchr (string, '~'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|       result = (char *)xmalloc (result_size = (strlen (string) + 16));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|     else",
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
                    "file_name": "bash-5.1/lib/sh/getenv.c",
                    "line": 55,
                    "column": 7,
                    "event": "warning[-Wtautological-pointer-compare]",
                    "message": "comparison of nonnull parameter 'name' equal to a null pointer is 'false' on first encounter",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (name == 0 || *name == '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~    ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdlib.h",
                    "line": 639,
                    "column": 50,
                    "event": "note",
                    "message": "declared 'nonnull' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "extern char *getenv (const char *__name) __THROW __nonnull ((1)) __wur;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 380,
                    "column": 28,
                    "event": "note",
                    "message": "expanded from macro '__nonnull'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define __nonnull(params) __attribute_nonnull__ (params)",
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
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 374,
                    "column": 57,
                    "event": "note",
                    "message": "expanded from macro '__attribute_nonnull__'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define __attribute_nonnull__(params) __attribute__ ((__nonnull__ params))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|     SHELL_VAR *var;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|->   if (name == 0 || *name == '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       return ((char *)NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   ",
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
                    "file_name": "bash-5.1/lib/sh/getenv.c",
                    "line": 112,
                    "column": 7,
                    "event": "warning[-Wtautological-pointer-compare]",
                    "message": "comparison of nonnull parameter 'str' equal to a null pointer is 'false' on first encounter",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (str == 0 || *str == '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~    ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdlib.h",
                    "line": 652,
                    "column": 44,
                    "event": "note",
                    "message": "declared 'nonnull' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "extern int putenv (char *__string) __THROW __nonnull ((1));",
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
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 380,
                    "column": 28,
                    "event": "note",
                    "message": "expanded from macro '__nonnull'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define __nonnull(params) __attribute_nonnull__ (params)",
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
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 374,
                    "column": 57,
                    "event": "note",
                    "message": "expanded from macro '__attribute_nonnull__'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define __attribute_nonnull__(params) __attribute__ ((__nonnull__ params))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|     int offset;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->   if (str == 0 || *str == '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|         errno = EINVAL;",
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
                    "file_name": "bash-5.1/lib/sh/getenv.c",
                    "line": 214,
                    "column": 7,
                    "event": "warning[-Wtautological-pointer-compare]",
                    "message": "comparison of nonnull parameter 'name' equal to a null pointer is 'false' on first encounter",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (name == 0 || *name == '\\0' || strchr (name, '=') != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~    ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdlib.h",
                    "line": 662,
                    "column": 50,
                    "event": "note",
                    "message": "declared 'nonnull' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "extern int unsetenv (const char *__name) __THROW __nonnull ((1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 380,
                    "column": 28,
                    "event": "note",
                    "message": "expanded from macro '__nonnull'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define __nonnull(params) __attribute_nonnull__ (params)",
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
                    "file_name": "/usr/include/sys/cdefs.h",
                    "line": 374,
                    "column": 57,
                    "event": "note",
                    "message": "expanded from macro '__attribute_nonnull__'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define __attribute_nonnull__(params) __attribute__ ((__nonnull__ params))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|        const char *name;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|->   if (name == 0 || *name == '\\0' || strchr (name, '=') != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|         errno = EINVAL;",
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
                    "file_name": "bash-5.1/lib/sh/makepath.c",
                    "line": 123,
                    "column": 15,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (*r++ = *s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/makepath.c",
                    "line": 123,
                    "column": 15,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (*r++ = *s++)",
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
                    "file_name": "bash-5.1/lib/sh/makepath.c",
                    "line": 123,
                    "column": 15,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (*r++ = *s++)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       *r++ = '/';      ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|     s = xdir;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|->   while (*r++ = *s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|     if (xpath != path && xpath != nullpath)",
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
                    "file_name": "bash-5.1/lib/sh/pathcanon.c",
                    "line": 117,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (rooted = ROOTEDPATH(path))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/pathcanon.c",
                    "line": 117,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (rooted = ROOTEDPATH(path))",
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
                    "file_name": "bash-5.1/lib/sh/pathcanon.c",
                    "line": 117,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (rooted = ROOTEDPATH(path))",
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
                    "message": "  115|     /* POSIX.2 says to leave a leading `//' alone.  On cygwin, we skip over any",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|        leading `x:' (dos drive name). */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|->   if (rooted = ROOTEDPATH(path))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|         stub_char = DIRSEP;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/lib/sh/random.c",
                    "line": 93,
                    "column": 8,
                    "event": "warning[-Wpointer-to-int-cast]",
                    "message": "cast to smaller integer type 'unsigned int' from 'void (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  iv = (u_bits32_t)seedrand;            /* let the compiler truncate */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|     gettimeofday (&tv, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|->   iv = (u_bits32_t)seedrand;\t\t/* let the compiler truncate */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     iv = tv.tv_sec ^ tv.tv_usec ^ getpid () ^ getppid () ^ current_user.uid ^ iv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     return (iv);",
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
                    "file_name": "bash-5.1/lib/sh/spell.c",
                    "line": 98,
                    "column": 26,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (p = best; *np = *p++; np++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/spell.c",
                    "line": 98,
                    "column": 26,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (p = best; *np = *p++; np++)",
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
                    "file_name": "bash-5.1/lib/sh/spell.c",
                    "line": 98,
                    "column": 26,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      for (p = best; *np = *p++; np++)",
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
                    "message": "   96|          *  Add to end of newname",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|          */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|->       for (p = best; *np = *p++; np++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|       }",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 253,
                    "column": 19,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = str; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 253,
                    "column": 19,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = str; c = *s; s++)",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 253,
                    "column": 19,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = str; c = *s; s++)",
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
                    "message": "  251|     *r++ = '\\'';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|->   for (s = str; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|         b = l = 1;\t\t/* 1 == add backslash; 0 == no backslash */",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 337,
                    "column": 25,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (wcs = wcstr; wcc = *wcs; wcs++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 337,
                    "column": 25,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (wcs = wcstr; wcc = *wcs; wcs++)",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 337,
                    "column": 25,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (wcs = wcstr; wcc = *wcs; wcs++)",
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
                    "message": "  335|     mbstowcs (wcstr, string, slen + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->   for (wcs = wcstr; wcc = *wcs; wcs++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|       if (iswprint(wcc) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|         {",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 360,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 360,
                    "column": 22,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
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
                    "file_name": "bash-5.1/lib/sh/strtrans.c",
                    "line": 360,
                    "column": 22,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (s = string; c = *s; s++)",
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
                    "message": "  358|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|->   for (s = string; c = *s; s++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|   #if defined (HANDLE_MULTIBYTE)",
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
                    "file_name": "bash-5.1/lib/sh/tmpfile.c",
                    "line": 160,
                    "event": "warning",
                    "message": "the use of `mktemp' is dangerous, better use `mkstemp' or `mkdtemp'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|       sprintf (filename, \"%s/%s.XXXXXX\", tdir, lroot);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|->   if (mktemp (filename) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|         free (filename);",
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
                    "file_name": "bash-5.1/lib/tilde/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/tilde/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
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
                    "file_name": "bash-5.1/lib/tilde/tilde.c",
                    "line": 195,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (result = strchr (string, '~'))",
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
                    "message": "  193|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|     result_index = result_size = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|->   if (result = strchr (string, '~'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|       result = (char *)xmalloc (result_size = (strlen (string) + 16));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|     else",
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
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 394,
                    "column": 19,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (mailfile = extract_colon_unit (mailpaths, &i))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 394,
                    "column": 19,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (mailfile = extract_colon_unit (mailpaths, &i))",
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
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 394,
                    "column": 19,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (mailfile = extract_colon_unit (mailpaths, &i))",
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
                    "message": "  392|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|->   while (mailfile = extract_colon_unit (mailpaths, &i))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|         mp = parse_mailpath_spec (mailfile);",
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
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 468,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp = expand_string_to_string (message, Q_DOUBLE_QUOTES))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 468,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp = expand_string_to_string (message, Q_DOUBLE_QUOTES))",
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
                    "file_name": "bash-5.1/mailcheck.c",
                    "line": 468,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp = expand_string_to_string (message, Q_DOUBLE_QUOTES))",
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
                    "message": "  466|   #undef mtime",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|-> \t  if (temp = expand_string_to_string (message, Q_DOUBLE_QUOTES))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   \t      puts (temp);",
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
                    "file_name": "bash-5.1/make_cmd.c",
                    "line": 613,
                    "column": 20,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (full_line = read_secondary_line (delim_unquoted))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/make_cmd.c",
                    "line": 613,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (full_line = read_secondary_line (delim_unquoted))",
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
                    "file_name": "bash-5.1/make_cmd.c",
                    "line": 613,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (full_line = read_secondary_line (delim_unquoted))",
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
                    "message": "  611|        need to perform backslash-quoted newline removal. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|     delim_unquoted = (temp->redirectee.filename->flags & W_QUOTED) == 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|->   while (full_line = read_secondary_line (delim_unquoted))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|         register char *line;",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4701,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4701,
                    "column": 17,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4701,
                    "column": 17,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4699|     else if (cond_token != COND_ERROR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4700|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4701|->       if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4702|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4703|   \t  parser_error (cond_lineno, _(\"syntax error in conditional expression: unexpected token `%s'\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4783,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4783,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4783,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4781|   \t  if (term)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4782|   \t    dispose_cond_node (term);\t\t/* ( */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4783|-> \t  if (etext = error_token_from_token (cond_token))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4784|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4785|   \t      parser_error (lineno, _(\"unexpected token `%s', expected `)'\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4815,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4815,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4815,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4813|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4814|   \t  dispose_word (op);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4815|-> \t  if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4816|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4817|   \t      parser_error (line_number, _(\"unexpected argument `%s' to conditional unary operator\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4865,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4865,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4865,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4863|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4864|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4865|-> \t  if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4866|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4867|   \t      parser_error (line_number, _(\"unexpected token `%s', conditional binary operator expected\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4891,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4891,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4891,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4889|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4890|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4891|-> \t  if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4892|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4893|   \t      parser_error (line_number, _(\"unexpected argument `%s' to conditional binary operator\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4909,
                    "column": 22,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      else if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 4909,
                    "column": 22,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      else if (etext = error_token_from_token (tok))",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 4909,
                    "column": 22,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      else if (etext = error_token_from_token (tok))",
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
                    "message": " 4907|         if (tok < 256)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4908|   \tparser_error (line_number, _(\"unexpected token `%c' in conditional command\"), tok);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4909|->       else if (etext = error_token_from_token (tok))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4910|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4911|   \t  parser_error (line_number, _(\"unexpected token `%s' in conditional command\"), etext);",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 5811,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 5811,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 5811,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5809|     orig_string = string;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5810|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5811|->   while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5812|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5813|         if (posixly_correct && c == '!')",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 6216,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, word_token_alist, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 6216,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, word_token_alist, 0))",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 6216,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, word_token_alist, 0))",
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
                    "message": " 6214|     char *t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6215|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6216|->   if (t = find_token_in_alist (tok, word_token_alist, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6217|       return t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6218|   ",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 6219,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, other_token_alist, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/parse.y",
                    "line": 6219,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, other_token_alist, 0))",
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
                    "file_name": "bash-5.1/parse.y",
                    "line": 6219,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = find_token_in_alist (tok, other_token_alist, 0))",
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
                    "message": " 6217|       return t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6218|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6219|->   if (t = find_token_in_alist (tok, other_token_alist, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6220|       return t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6221|   ",
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
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 78,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 78,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 78,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|     send = string + strlen (string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|->   while (c = *string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|         switch (c)",
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
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 673,
                    "column": 20,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (colon_bit = split_ignorespec (this_ignoreval, &ptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 673,
                    "column": 20,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (colon_bit = split_ignorespec (this_ignoreval, &ptr))",
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
                    "file_name": "bash-5.1/pathexp.c",
                    "line": 673,
                    "column": 20,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (colon_bit = split_ignorespec (this_ignoreval, &ptr))",
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
                    "message": "  671|     while (colon_bit = extract_colon_unit (this_ignoreval, &ptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->   while (colon_bit = split_ignorespec (this_ignoreval, &ptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|       {",
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
                    "file_name": "bash-5.1/redir.c",
                    "line": 1462,
                    "column": 10,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/redir.c",
                    "line": 1462,
                    "column": 10,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/redir.c",
                    "line": 1462,
                    "column": 10,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1460|     /* XXX - handle set -u here? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1461|   #if defined (ARRAY_VARS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1462|->   if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1463|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1464|         v = array_variable_part (w, 0, &sub, &len);",
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
                    "file_name": "bash-5.1/redir.c",
                    "line": 1477,
                    "column": 15,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/redir.c",
                    "line": 1477,
                    "column": 15,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (vr = valid_array_reference (w, 0))",
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
                    "file_name": "bash-5.1/redir.c",
                    "line": 1477,
                    "column": 15,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (vr = valid_array_reference (w, 0))",
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
                    "message": " 1475|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1476|   \t      w = nameref_cell (v);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1477|-> \t      if (vr = valid_array_reference (w, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1478|   \t\tv = array_variable_part (w, 0, &sub, &len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1479|   \t      else",
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
                    "file_name": "bash-5.1/shell.c",
                    "line": 906,
                    "column": 28,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (arg_character = arg_string[i++])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/shell.c",
                    "line": 906,
                    "column": 28,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (arg_character = arg_string[i++])",
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
                    "file_name": "bash-5.1/shell.c",
                    "line": 906,
                    "column": 28,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      while (arg_character = arg_string[i++])",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  904|         i = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  905|         on_or_off = arg_string[0];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906|->       while (arg_character = arg_string[i++])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|   \t  switch (arg_character)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 804,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 804,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 804,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|     i = *sindex;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|     found = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  806|         if (c == '\\\\')",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 878,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 878,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 878,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  876|     j = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  877|     i = *sindex;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  878|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  879|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  880|         /* Process a character that was quoted by a backslash. */",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 1030,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1030,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1030,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|     pass_next = backquote = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|     i = sind;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|         if (pass_next)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 1182,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1182,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1182,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180|     wcharlist = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|   #if defined (HANDLE_MULTIBYTE)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 1532,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1532,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1532,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1530|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1531|     i = *sindex;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1532|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1533|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1534|         if (pass_character)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 1764,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1764,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1764,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1762|     pass_next = backq = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1763|     ss = (char *)string;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1764|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1765|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1766|         if (pass_next)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 1887,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1887,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 1887,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1885|     i = start;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1886|     pass_next = backq = dquote = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1887|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1888|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1889|         /* If this is non-zero, we should not let quote characters be delimiters",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 2062,
                    "column": 12,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 2062,
                    "column": 12,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 2062,
                    "column": 12,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2060|     i = start;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2061|     pass_next = backq = dquote = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2062|->   while (c = string[i])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2063|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2064|         if (pass_next)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 3277,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (name, LBRACK))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 3277,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (name, LBRACK))",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 3277,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (t = mbschr (name, LBRACK))",
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
                    "message": " 3275|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3276|   #if defined (ARRAY_VARS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3277|->   if (t = mbschr (name, LBRACK))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3278|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3279|         if (assign_list)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 6843,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ~~~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 6843,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable (name))",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 6843,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable (name))",
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
                    "message": " 6841|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6842|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6843|->   else if (var = find_variable (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6844|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6845|         if (var_isset (var) && invisible_p (var) == 0)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 6876,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable_last_nameref (name, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 6876,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable_last_nameref (name, 0))",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 6876,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (var = find_variable_last_nameref (name, 0))",
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
                    "message": " 6874|   \ttemp = (char *)NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6875|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6876|->   else if (var = find_variable_last_nameref (name, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6877|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6878|         temp = nameref_cell (var);",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 8891,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (c = string[sindex])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 8891,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (c = string[sindex])",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 8891,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (c = string[sindex])",
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
                    "message": " 8889|     /* Find out what character ended the variable name.  Then",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8890|        do the appropriate thing. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8891|->   if (c = string[sindex])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8892|       sindex++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8893|   ",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 8901,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = string[sindex])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 8901,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = string[sindex])",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 8901,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (c = string[sindex])",
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
                    "message": " 8899|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8900|         check_nullness++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8901|->       if (c = string[sindex])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8902|   \tsindex++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 8903|       }",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 10989,
                    "column": 31,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (dquote = sindex = 0; c = string[sindex];)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 10989,
                    "column": 31,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (dquote = sindex = 0; c = string[sindex];)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 10989,
                    "column": 31,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (dquote = sindex = 0; c = string[sindex];)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "10987|     r = result_string = (char *)xmalloc (slen + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "10988|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "10989|->   for (dquote = sindex = 0; c = string[sindex];)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "10990|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "10991|         switch (c)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 11527,
                    "column": 33,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (eindex = 0; temp_string = expansions[eindex]; eindex++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/subst.c",
                    "line": 11527,
                    "column": 33,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (eindex = 0; temp_string = expansions[eindex]; eindex++)",
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
                    "file_name": "bash-5.1/subst.c",
                    "line": 11527,
                    "column": 33,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          for (eindex = 0; temp_string = expansions[eindex]; eindex++)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11525|   \t  expansions = brace_expand (tlist->word->word);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11526|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11527|-> \t  for (eindex = 0; temp_string = expansions[eindex]; eindex++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11528|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11529|   \t      w = alloc_word_desc ();",
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
                    "file_name": "bash-5.1/support/bashversion.c",
                    "line": 70,
                    "column": 16,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (progname = strrchr (argv[0], '/'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/bashversion.c",
                    "line": 70,
                    "column": 16,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (progname = strrchr (argv[0], '/'))",
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
                    "file_name": "bash-5.1/support/bashversion.c",
                    "line": 70,
                    "column": 16,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (progname = strrchr (argv[0], '/'))",
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
                    "message": "   68|     char dv[128], *rv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|->   if (progname = strrchr (argv[0], '/'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|       progname++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|     else",
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
                    "file_name": "bash-5.1/support/man2html.c",
                    "line": 3693,
                    "column": 44,
                    "event": "warning[-Wparentheses]",
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
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "Additional Info: address: 0:(ReadLSB w64 0 environ)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "Additional Info: example: 0:255",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 0]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "Additional Info: offset range: [1, 18446744073709551615]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/support/printenv.c",
                    "line": 59,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|     for (envp = environ; *envp; envp++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->       if (**argv == **envp && strncmp (*envp, *argv, len) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \t  eval = *envp + len;",
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
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 271,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
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
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/unwind_prot.c",
                    "line": 306,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
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
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 408,
                    "column": 17,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp_var = find_function (tname))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 408,
                    "column": 17,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp_var = find_function (tname))",
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
                    "message": "  406|   \t    free (temp_string);\t\t/* parse_and_execute does this */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|-> \t  if (temp_var = find_function (tname))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|   \t      VSETATTR (temp_var, (att_exported|att_imported));",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 415,
                    "column": 21,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (temp_var = bind_invalid_envvar (name, string, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 415,
                    "column": 21,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (temp_var = bind_invalid_envvar (name, string, 0))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 415,
                    "column": 21,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              if (temp_var = bind_invalid_envvar (name, string, 0))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 408,
                    "column": 17,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (temp_var = find_function (tname))",
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
                    "message": "  413|   \t  else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|-> \t      if (temp_var = bind_invalid_envvar (name, string, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|   \t\t  VSETATTR (temp_var, (att_exported | att_imported | att_invisible));",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 2015,
                    "column": 11,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (v = hash_lookup (name, vc->table))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 2015,
                    "column": 11,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (v = hash_lookup (name, vc->table))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 2015,
                    "column": 11,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (v = hash_lookup (name, vc->table))",
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
                    "message": " 2013|     v = (SHELL_VAR *)NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2014|     for (vc = vcontext; vc; vc = vc->down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2015|->     if (v = hash_lookup (name, vc->table))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2016|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2017|   ",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 3915,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 3915,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 3915,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
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
                    "message": " 3913|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3914|     for (elt = (BUCKET_CONTENTS *)NULL, v = vc; v; v = v->down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3915|->     if (elt = hash_remove (name, v->table, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3916|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3917|   ",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 3944,
                    "column": 13,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 3944,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 3944,
                    "column": 13,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (elt = hash_remove (name, v->table, 0))",
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
                    "message": " 3942|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3943|     for (elt = (BUCKET_CONTENTS *)NULL, v = vc; v; v = v->down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3944|->     if (elt = hash_remove (name, v->table, 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3945|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3946|   ",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 4810,
                    "column": 35,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0, list_index = 0; var = vars[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 4810,
                    "column": 35,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0, list_index = 0; var = vars[i]; i++)",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 4810,
                    "column": 35,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i = 0, list_index = 0; var = vars[i]; i++)",
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
                    "message": " 4808|   #define USE_EXPORTSTR (value == var->exportstr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4809|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4810|->   for (i = 0, list_index = 0; var = vars[i]; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4811|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4812|   #if defined (__CYGWIN__)",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 5335,
                    "column": 11,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (ret = vcxt->down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~~~^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 5335,
                    "column": 11,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (ret = vcxt->down)",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 5335,
                    "column": 11,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (ret = vcxt->down)",
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
                    "message": " 5333|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5334|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5335|->   if (ret = vcxt->down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5336|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5337|         ret->up = (VAR_CONTEXT *)NULL;",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 6078,
                    "column": 14,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (val = extract_colon_unit (temp, &tptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 6078,
                    "column": 14,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (val = extract_colon_unit (temp, &tptr))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 6078,
                    "column": 14,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while (val = extract_colon_unit (temp, &tptr))",
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
                    "message": " 6076|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6077|     tptr = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6078|->   while (val = extract_colon_unit (temp, &tptr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6079|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6080|         if (STREQ (val, \"ignorespace\"))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 6127,
                    "column": 9,
                    "event": "warning[-Wparentheses]",
                    "message": "using the result of an assignment as a condition without parentheses",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ~~^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/variables.c",
                    "line": 6127,
                    "column": 9,
                    "event": "note",
                    "message": "place parentheses around the assignment to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (name))",
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
                    "file_name": "bash-5.1/variables.c",
                    "line": 6127,
                    "column": 9,
                    "event": "note",
                    "message": "use '==' to turn this assignment into an equality comparison",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (v = find_variable (name))",
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
                    "message": " 6125|     SHELL_VAR *v;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6126|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6127|->   if (v = find_variable (name))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6128|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6129|         if (history_comment_char == 0)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
