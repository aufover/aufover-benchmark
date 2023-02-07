{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnupg2-2.3.2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/valgrind/output",
        "time-created": "2022-11-24 03:09:48",
        "time-finished": "2022-11-24 03:21:22",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/gnupg2-2.3.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "gnupg-2.3.2/agent/cvt-openpgp.h",
                    "line": 27,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'convert_from_openpgp_native' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27 | gpg_error_t convert_from_openpgp_native (ctrl_t ctrl,",
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
                    "file_name": "gnupg-2.3.2/agent/t-protect.c",
                    "line": 344,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344 | convert_from_openpgp_native (gcry_sexp_t s_pgp, const char *passphrase,",
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
                    "file_name": "gnupg-2.3.2/agent/t-protect.c",
                    "line": 344,
                    "column": 1,
                    "event": "note",
                    "message": "'convert_from_openpgp_native' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|                                     const char *cache_nonce,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|                                     unsigned char **r_key, char **r_passphrase);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|-> gpg_error_t convert_from_openpgp_native (ctrl_t ctrl,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|                                            gcry_sexp_t s_pgp,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|                                            const char *passphrase,",
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'use_hardlinks_p'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 641,
                    "column": 10,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'link' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  641 |   (void) link (tname, lname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  639|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  640|     /* We ignore the return value of link() because it is unreliable.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  641|->   (void) link (tname, lname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  642|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  643|     if (stat (tname, &sb))",
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dotlock_take_unix'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 1084,
                    "column": 14,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'link' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084 |       (void) link (h->tname, h->lockname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|         /* We ignore the return value of link() because it is unreliable.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|->       (void) link (h->tname, h->lockname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|         if (stat (h->tname, &sb))",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'got_fatal_signal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 111,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111 |   (void)write (2, \"\\n\", 1 );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|       cleanup_fnc ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|     /* Better don't translate these messages. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|->   (void)write (2, \"\\n\", 1 );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|     s = log_get_prefix (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|     if (s)",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 114,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114 |     (void)write(2, s, strlen (s));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|     s = log_get_prefix (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|     if (s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|->     (void)write(2, s, strlen (s));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|     (void)write (2, \": signal \", 9 );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|     s = get_signal_name(sig);",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 115,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115 |   (void)write (2, \": signal \", 9 );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|     if (s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       (void)write(2, s, strlen (s));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->   (void)write (2, \": signal \", 9 );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|     s = get_signal_name(sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     if (s)",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 118,
                    "column": 12,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118 |     (void) write (2, s, strlen(s) );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|     s = get_signal_name(sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     if (s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     (void) write (2, s, strlen(s) );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       {",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 128,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 |         (void)write (2, \"?\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|            this is a bug in that system, we will protect against it.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|         if (sig < 0 || sig >= 100000)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->         (void)write (2, \"?\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|           {",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 137,
                    "column": 25,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137 |                   (void)write (2, &\"0123456789\"[value/i], 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|                 if (value >= i || ((any || i==1) && !(value/i)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|->                   (void)write (2, &\"0123456789\"[value/i], 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|                     if ((value/i))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|                       any = 1;",
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 145,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145 |   (void)write (2, \" caught ... exiting\\n\", 20);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|->   (void)write (2, \" caught ... exiting\\n\", 20);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|     /* Reset action to default action and raise signal again */",
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_close_all_fds'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 96,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'dup' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~",
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
                    "message": "   95|     /* Some dups to get more file descriptors and close one. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     fd = dup (1);",
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 97,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'dup' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     /* Some dups to get more file descriptors and close one. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|->   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     fd = dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     dup (1);",
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 99,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'dup' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99 |   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     fd = dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->   dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     close (fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   ",
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 140,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'dup' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140 |         dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|         for (n=initial_count; n < 31; n++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|->         dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|         array = xget_all_open_fds ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|         if (verbose)",
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 147,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'dup' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147 |           dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|         for (n=0; n < 5; n++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|->           dup (1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|             array = xget_all_open_fds ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|             if (verbose)",
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
                    "file_name": "./t-ldap-misc",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4465",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "126 bytes in 3 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "/usr/lib64/libgcrypt.so.20.3.4",
                    "line": 0,
                    "event": "note",
                    "message": "called from gcry_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-misc.c",
                    "line": 94,
                    "event": "note",
                    "message": "called from test_ldap_parse_extfilter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-misc.c",
                    "line": 155,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|         string++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|->       base = xtrymalloc (strlen (string)+1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|         if (!base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|           {",
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
                    "file_name": "gnupg-2.3.2/g10/keyserver-internal.h",
                    "line": 34,
                    "column": 24,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'parse_keyserver_uri' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 | struct keyserver_spec *parse_keyserver_uri (const char *string,",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 610,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610 | parse_keyserver_uri (const char *uri, int require_scheme,",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 610,
                    "column": 1,
                    "event": "note",
                    "message": "'parse_keyserver_uri' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   void free_keyserver_spec(struct keyserver_spec *keyserver);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   struct keyserver_spec *keyserver_match(struct keyserver_spec *spec);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> struct keyserver_spec *parse_keyserver_uri (const char *string,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|                                               int require_scheme);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   struct keyserver_spec *parse_preferred_keyserver(PKT_signature *sig);",
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
                    "file_name": "gnupg-2.3.2/g10/keyserver-internal.h",
                    "line": 45,
                    "column": 5,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'keyserver_import_keyid' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45 | int keyserver_import_keyid (ctrl_t ctrl, u32 *keyid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 426,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426 | keyserver_import_keyid (u32 *keyid, void *dummy, unsigned int flags)",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 426,
                    "column": 1,
                    "event": "note",
                    "message": "'keyserver_import_keyid' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   int keyserver_import_fprint_ntds (ctrl_t ctrl,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|                                     const byte *fprint, size_t fprint_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|-> int keyserver_import_keyid (ctrl_t ctrl, u32 *keyid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|                               struct keyserver_spec *keyserver,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|                               unsigned int flags);",
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
                    "file_name": "gnupg-2.3.2/g10/keyserver-internal.h",
                    "line": 51,
                    "column": 5,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'keyserver_import_cert' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51 | int keyserver_import_cert (ctrl_t ctrl, const char *name, int dane_mode,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 457,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457 | keyserver_import_cert (const char *name)",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 457,
                    "column": 1,
                    "event": "note",
                    "message": "'keyserver_import_cert' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   gpg_error_t keyserver_search (ctrl_t ctrl, strlist_t tokens);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   int keyserver_fetch (ctrl_t ctrl, strlist_t urilist, int origin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|-> int keyserver_import_cert (ctrl_t ctrl, const char *name, int dane_mode,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|                              unsigned char **fpr,size_t *fpr_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   gpg_error_t keyserver_import_wkd (ctrl_t ctrl, const char *name,",
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
                    "file_name": "gnupg-2.3.2/g10/keyserver-internal.h",
                    "line": 58,
                    "column": 5,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'keyserver_import_mbox' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58 | int keyserver_import_mbox (ctrl_t ctrl, const char *mbox,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 476,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476 | keyserver_import_mbox (const char *name,struct keyserver_spec *spec)",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 476,
                    "column": 1,
                    "event": "note",
                    "message": "'keyserver_import_mbox' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|   int keyserver_import_ntds (ctrl_t ctrl, const char *name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|                              unsigned char **fpr,size_t *fpr_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|-> int keyserver_import_mbox (ctrl_t ctrl, const char *mbox,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|                              unsigned char **fpr,size_t *fpr_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|                              struct keyserver_spec *keyserver);",
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
                    "file_name": "gnupg-2.3.2/g10/keyserver-internal.h",
                    "line": 61,
                    "column": 5,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'keyserver_import_ldap' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61 | int keyserver_import_ldap (ctrl_t ctrl, const char *name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 495,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495 | keyserver_import_ldap (const char *name)",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 495,
                    "column": 1,
                    "event": "note",
                    "message": "'keyserver_import_ldap' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|                              unsigned char **fpr,size_t *fpr_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|                              struct keyserver_spec *keyserver);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|-> int keyserver_import_ldap (ctrl_t ctrl, const char *name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|                              unsigned char **fpr,size_t *fpr_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   ",
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
                    "file_name": "gnupg-2.3.2/g10/photoid.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'run_with_pipe'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/photoid.c",
                    "line": 512,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512 |       write (to[1], image, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|->       write (to[1], image, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|         close (to[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|   ",
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
                    "file_name": "gnupg-2.3.2/g10/photoid.h",
                    "line": 31,
                    "column": 6,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'show_photos' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31 | void show_photos (ctrl_t ctrl, const struct user_attribute *attrs, int count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 628,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628 | show_photos (const struct user_attribute *attrs, int count, PKT_public_key *pk)",
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 628,
                    "column": 1,
                    "event": "note",
                    "message": "'show_photos' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   int parse_image_header(const struct user_attribute *attr,byte *type,u32 *len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   const char *image_type_to_string(byte type,int style);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|-> void show_photos (ctrl_t ctrl, const struct user_attribute *attrs, int count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|                     PKT_public_key *pk, PKT_user_id *uid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
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
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'scd_kick_the_loop'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 1230,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230 |   write (notify_fd, \"\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1228|                  w32_strerror (-1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1229|   #elif defined(HAVE_PSELECT_NO_EINTR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|->   write (notify_fd, \"\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|     int ret = kill (main_thread_pid, SIGCONT);",
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
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'handle_connections'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 1391,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'read' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1391 |           read (pipe_fd[0], buf, sizeof buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1389|             char buf[256];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1390|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1391|->           read (pipe_fd[0], buf, sizeof buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1392|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1393|   #endif",
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
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gpgsm_dirmngr_isvalid.part.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 575,
                    "column": 24,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575 |                   rc = gpgsm_validate_chain (ctrl, rspcert, \"\", NULL, 0, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576 |                                              VALIDATE_FLAG_NO_DIRMNGR, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 575,
                    "column": 24,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  573|                     /* Note the no_dirmngr flag: This avoids checking",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  574|                        this certificate over and over again. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575|->                   rc = gpgsm_validate_chain (ctrl, rspcert, \"\", NULL, 0, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576|                                                VALIDATE_FLAG_NO_DIRMNGR, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577|                     if (rc)",
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
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gpgsm_add_to_certlist'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 447,
                    "column": 22,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447 |                 rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |                                            0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 447,
                    "column": 22,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|                 if (!rc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|->                 rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|                                              0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|                 if (!rc)",
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
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'check_and_store'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 194,
                    "column": 10,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |     rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 194,
                    "column": 10,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|     rc = gpgsm_basic_cert_check (ctrl, cert);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|     if (!rc && ctrl->with_validation)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->     rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|     if (!rc || (!ctrl->with_validation",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|                 && (gpg_err_code (rc) == GPG_ERR_MISSING_CERT",
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
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'list_cert_colon'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 451,
                    "column": 14,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451 |     valerr = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 451,
                    "column": 14,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|     if (ctrl->with_validation)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|->     valerr = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|       valerr = 0;",
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
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'list_cert_raw.constprop.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 1176,
                    "column": 13,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1176 |       err = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, fp, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 1176,
                    "column": 13,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1174|     if (with_validation)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1175|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1176|->       err = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, fp, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177|         if (!err)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1178|           es_fprintf (fp, \"  [certificate is good]\\n\");",
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
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'list_cert_std'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 1425,
                    "column": 13,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1425 |       err = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, fp, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 1425,
                    "column": 13,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1423|         char buffer[1];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1424|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1425|->       err = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 1, fp, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1426|         tmperr = ksba_cert_get_user_data (cert, \"is_qualified\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1427|                                           &buffer, sizeof (buffer), &buflen);",
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
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gpgsm_sign'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 507,
                    "column": 14,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'gpgsm_validate_chain' accessing 16 bytes in a region of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507 |         rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 507,
                    "column": 14,
                    "event": "note",
                    "message": "referencing argument 3 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/sm/gpgsm.h",
                    "line": 352,
                    "column": 5,
                    "event": "note",
                    "message": "in a call to function 'gpgsm_validate_chain'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 | int gpgsm_validate_chain (ctrl_t ctrl, ksba_cert_t cert,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|         rc = gpgsm_cert_use_sign_p (cert, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|         if (!rc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|->         rc = gpgsm_validate_chain (ctrl, cert, \"\", NULL, 0, NULL, 0, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|         if (rc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|           {",
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
                    "file_name": "gnupg-2.3.2/tests/gpgscm/ffi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_file_equal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/tests/gpgscm/ffi.c",
                    "line": 1044,
                    "column": 3,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fread' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044 |   fread (b_buf, 1, 1, b_stream);",
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
                    "message": " 1042|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|->   fread (b_buf, 1, 1, b_stream);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045|     if (! feof (b_stream))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046|       goto out;\t/* b is longer */",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
