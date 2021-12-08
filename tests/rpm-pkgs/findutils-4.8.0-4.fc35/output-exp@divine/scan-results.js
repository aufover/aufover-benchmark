{
    "scan":
    {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "findutils-4.8.0-4.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/divine/output",
        "time-created": "2021-12-08 00:39:30",
        "time-finished": "2021-12-08 00:42:13",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/divine/output' '-f' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/findutils-4.8.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211207.132556.gc0a64a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/find/exec.c",
                    "line": 337,
                    "column": 2,
                    "event": "warning",
                    "message": "implicit declaration of function 'execvp' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        execvp (argv[0], argv);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   \terrno = E2BIG;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|         else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> \texecvp (argv[0], argv);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|         /* TODO: use a pipe to pass back the errno value, like xargs does */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|         error (0, errno, \"%s\",",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/find/util.c",
                    "line": 833,
                    "column": 5,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'const char *' from 'int'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  p = strtok_r (arg, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|     size_t i;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|->   p = strtok_r (arg, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  834|     while (p)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  835|       {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/find/util.c",
                    "line": 833,
                    "column": 7,
                    "event": "warning",
                    "message": "implicit declaration of function 'strtok_r' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  p = strtok_r (arg, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|     size_t i;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|->   p = strtok_r (arg, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  834|     while (p)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  835|       {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/find/util.c",
                    "line": 851,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'const char *' from 'int'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      p = strtok_r (NULL, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  849|   \t\t quotearg_n_style (0, options.err_quoting_style, arg));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|->       p = strtok_r (NULL, delimiters, &token_context);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|     if (empty)",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gl/lib/strerror_r.c",
                    "line": 205,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible pointer to integer conversion assigning to 'int' from 'char *'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ret = strerror_r (errnum, buf, buflen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   # else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|->     ret = strerror_r (errnum, buf, buflen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|       /* Some old implementations may return (-1, EINVAL) instead of EINVAL.",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gl/lib/strerror_r.c",
                    "line": 242,
                    "column": 60,
                    "event": "warning",
                    "message": "comparison between pointer and integer ('char *' and 'int')",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (strerror_r (errnum, stackbuf, sizeof stackbuf) == ERANGE)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ^  ~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|           /* STACKBUF_LEN should have been large enough.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|->         if (strerror_r (errnum, stackbuf, sizeof stackbuf) == ERANGE)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|             abort ();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|           safe_copy (buf, buflen, stackbuf);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gl/lib/time_rz.c",
                    "line": 289,
                    "column": 12,
                    "event": "warning",
                    "message": "implicit declaration of function 'timegm' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return timegm (tm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|     if (!tz)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|->     return timegm (tm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|     else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/localename.c",
                    "line": 3123,
                    "column": 24,
                    "event": "warning",
                    "message": "implicit declaration of function '_NL_ITEM' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          nl_langinfo (_NL_ITEM ((category), _NL_ITEM_INDEX (-1)));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3121|              See <https://sourceware.org/bugzilla/show_bug.cgi?id=10968>.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3122|           const char *name =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3123|->           nl_langinfo (_NL_ITEM ((category), _NL_ITEM_INDEX (-1)));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3124|           if (name[0] == '\\0')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3125|             /* Fallback code for glibc < 2.4, which did not implement",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/localename.c",
                    "line": 3123,
                    "column": 46,
                    "event": "warning",
                    "message": "implicit declaration of function '_NL_ITEM_INDEX' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          nl_langinfo (_NL_ITEM ((category), _NL_ITEM_INDEX (-1)));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                             ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3121|              See <https://sourceware.org/bugzilla/show_bug.cgi?id=10968>.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3122|           const char *name =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3123|->           nl_langinfo (_NL_ITEM ((category), _NL_ITEM_INDEX (-1)));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3124|           if (name[0] == '\\0')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3125|             /* Fallback code for glibc < 2.4, which did not implement",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/pthread_sigmask.c",
                    "line": 52,
                    "column": 9,
                    "event": "warning",
                    "message": "implicit declaration of function 'pthread_sigmask' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ret = pthread_sigmask (how, new_mask, old_mask_ptr);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   # endif",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->   ret = pthread_sigmask (how, new_mask, old_mask_ptr);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   # if PTHREAD_SIGMASK_INEFFECTIVE",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/lib/fdleak.c",
                    "line": 161,
                    "column": 12,
                    "event": "warning",
                    "message": "implicit declaration of function 'poll' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      rv = poll (pf, limit, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   \t  pf[i].fd = fd_min + i;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|->       rv = poll (pf, limit, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|         if (-1 == rv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   \t{",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/lib/listfile.c",
                    "line": 337,
                    "column": 37,
                    "event": "warning",
                    "message": "taking address of packed member '' of class or structure 'stat' may result in an unaligned pointer value",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if ((when_local = localtime (&statp->st_mtime)))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|     if (output_good)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->       if ((when_local = localtime (&statp->st_mtime)))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|           {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|             char init_bigbuf[256];",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/xargs/xargs.c",
                    "line": 731,
                    "column": 16,
                    "event": "warning",
                    "message": "taking address of packed member '' of class or structure 'sigaction' may result in an unaligned pointer value",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  sigemptyset(&sigact.sa_mask);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|        proc_max.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|     sigact.sa_handler = increment_proc_max;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|->   sigemptyset(&sigact.sa_mask);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|     sigact.sa_flags = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|     if (0 != sigaction (SIGUSR1, &sigact, (struct sigaction *)NULL))",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/xargs/xargs.c",
                    "line": 737,
                    "column": 16,
                    "event": "warning",
                    "message": "taking address of packed member '' of class or structure 'sigaction' may result in an unaligned pointer value",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  sigemptyset(&sigact.sa_mask);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  735|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  736|     sigact.sa_handler = decrement_proc_max;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  737|->   sigemptyset(&sigact.sa_mask);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738|     sigact.sa_flags = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  739|     if (0 != sigaction (SIGUSR2, &sigact, (struct sigaction *)NULL))",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/xargs/xargs.c",
                    "line": 1334,
                    "column": 8,
                    "event": "warning",
                    "message": "implicit declaration of function 'execvp' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              execvp (argv[0], argv);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1332|   \t      errno = E2BIG;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1333|   \t    else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1334|-> \t      execvp (argv[0], argv);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1335|   \t    if (errno)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1336|   \t      {",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
