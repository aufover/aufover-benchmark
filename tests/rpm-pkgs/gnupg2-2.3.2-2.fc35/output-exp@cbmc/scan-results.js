{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnupg2-2.3.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/cbmc/output",
        "time-created": "2023-01-27 17:21:28",
        "time-finished": "2023-01-27 17:34:20",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/gnupg2-2.3.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "gnupg-2.3.2/agent/cache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2295 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/cache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40754 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-daemon.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2403 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-daemon.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40862 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-pinentry.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2286 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-pinentry.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40727 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2394 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/call-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40853 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/command-ssh.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2277 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/command-ssh.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40726 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/command.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2268 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/command.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40725 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/cvt-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2385 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/cvt-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2448 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/cvt-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40840 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/cvt-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40907 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/divert-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2376 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/divert-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40835 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/findkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2313 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/findkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40767 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/genkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2349 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/genkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40804 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/gpg-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2259 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/gpg-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40723 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/learncard.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2412 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/learncard.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40868 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/pkdecrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2340 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/pkdecrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40799 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/pksign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2331 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/pksign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40790 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/preset-passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2457 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/preset-passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40916 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect-tool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2421 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect-tool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40879 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2358 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2439 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2475 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40814 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40898 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40934 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/sexp-secret.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2322 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/sexp-secret.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2430 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/sexp-secret.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40779 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/sexp-secret.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40889 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/t-protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2466 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/t-protect.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40925 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/trans.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2304 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/trans.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40761 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/trustlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2367 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/agent/trustlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40826 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1106 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 312 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38595 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39080 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39513 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 771 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 321 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38604 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39089 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/asshelp2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 780 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/audit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 339 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/audit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38622 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/audit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39102 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/audit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 798 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64dec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 204 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64dec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38483 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64dec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38972 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64dec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 663 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 195 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38478 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38963 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/b64enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 654 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/call-gpg.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39295 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/call-gpg.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 960 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 285 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38568 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39053 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 744 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/comopt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38774 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/comopt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39259 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/comopt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 465 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/comopt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 924 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/compliance.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38783 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/compliance.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39268 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/compliance.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 474 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/compliance.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 933 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 222 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38505 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38990 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 681 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38371 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38864 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 555 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/dotlock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 96 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exechelp-posix.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38801 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exechelp-posix.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39284 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exechelp-posix.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 492 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exechelp-posix.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 951 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38720 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39205 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 411 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 870 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/get-passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38810 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/get-passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 501 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 177 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38460 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38945 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 636 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gpgrlhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1088 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/gpgrlhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39495 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/helpfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38696 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/helpfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39180 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/helpfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 393 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/helpfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 852 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/homedir.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 168 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/homedir.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38451 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/homedir.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38936 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/homedir.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 627 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/i18n.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38328 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/i18n.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38819 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/i18n.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 51 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/i18n.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 510 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 141 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38424 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38909 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 600 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/iobuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 294 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/iobuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38577 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/iobuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39061 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/iobuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 753 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ksba-io-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38756 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ksba-io-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39241 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ksba-io-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 447 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ksba-io-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 906 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mapstrings.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38329 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mapstrings.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38828 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mapstrings.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 519 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mapstrings.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 60 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 240 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38517 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39008 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 699 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/membuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 276 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/membuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38558 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/membuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39044 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/membuf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 735 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/miscellaneous.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 249 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/miscellaneous.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38532 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/miscellaneous.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39017 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/miscellaneous.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 708 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mischelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 105 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mischelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38388 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mischelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38873 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mischelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 564 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mkdir_p.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38704 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mkdir_p.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39192 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mkdir_p.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 402 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/mkdir_p.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 861 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38738 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39223 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 429 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 888 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-fpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38765 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-fpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39250 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-fpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 456 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-fpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 915 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 366 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38656 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39138 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 825 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-s2k.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 375 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-s2k.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38667 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-s2k.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39156 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/openpgp-s2k.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 834 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 231 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38516 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38999 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 690 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/pkscreening.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38792 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/pkscreening.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39277 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/pkscreening.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 483 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/pkscreening.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 942 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38747 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39232 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 438 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 897 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/server-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38729 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/server-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39214 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/server-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 420 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/server-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 879 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 348 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38640 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39125 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 807 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 150 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38433 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38918 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 609 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 330 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38613 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39098 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/signal.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 789 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/simple-pwquery.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1097 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/simple-pwquery.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39504 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 384 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38680 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39165 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 843 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/status.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 114 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/status.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38397 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/status.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38878 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/status.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 573 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/stringhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38330 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/stringhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38837 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/stringhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 528 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/stringhelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 69 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/strlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38357 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/strlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38846 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/strlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 537 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/strlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 78 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 159 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38442 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38927 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 618 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1048 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-ccparray.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39437 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39311 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-convert.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 968 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1072 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-exechelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39469 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1080 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-exectool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39485 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39330 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-gettime.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 984 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1032 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-mbox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39395 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1040 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-name-value.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39427 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1016 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-openpgp-oid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39363 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39319 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-percent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 976 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1056 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-recsel.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39449 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1008 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-session-env.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39355 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1000 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-sexputil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39347 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1024 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-ssh-utils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39369 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39337 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/t-sysutils.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 992 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv-builder.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 132 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv-builder.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38415 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv-builder.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38900 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv-builder.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 591 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 123 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38406 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38891 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/tlv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 582 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ttyio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 303 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ttyio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38586 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ttyio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39071 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/ttyio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 762 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/userids.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 357 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/userids.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38654 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/userids.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39134 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/userids.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 816 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/utf8conv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38362 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/utf8conv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38855 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/utf8conv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 546 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/utf8conv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 87 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/w32-cmdline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1064 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/w32-cmdline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39467 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xasprintf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 258 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xasprintf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38541 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xasprintf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39026 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xasprintf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 717 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xreadline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 267 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xreadline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38550 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xreadline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39035 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/xreadline.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 726 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/yesno.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 186 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/yesno.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38469 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/yesno.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38954 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/yesno.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 645 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 213 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38496 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 38981 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 672 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/certcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2793 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/certcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41264 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/crlcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2777 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/crlcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41237 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/crlfetch.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2785 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/crlfetch.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41238 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr-client.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2969 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr-client.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41460 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2761 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41235 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr_ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2978 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dirmngr_ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41469 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2849 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3023 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3077 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41331 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41525 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/dns-stuff.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41583 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/domaininfo.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2801 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/domaininfo.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41272 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2865 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3032 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3068 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41349 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41534 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41572 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-ntbtls.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2873 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http-ntbtls.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41352 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2857 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3014 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3059 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41338 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41512 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41563 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-action.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2881 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-action.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41364 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-finger.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2905 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-finger.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41388 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-hkp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2889 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-hkp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41368 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2897 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-http.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41374 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-kdns.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2913 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-kdns.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41396 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2953 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ks-engine-ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41444 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2945 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2987 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3086 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3113 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41436 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41478 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41592 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41628 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2937 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3050 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41428 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41553 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-wrapper.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2961 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap-wrapper.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41452 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2929 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldap.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41420 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldapserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2921 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ldapserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41412 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/loadswdb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2817 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/loadswdb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41283 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2825 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41304 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ocsp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2833 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/ocsp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41312 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2769 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41236 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-http-basic.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3005 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-http-basic.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41507 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3104 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41619 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3041 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-ldap-parse-uri.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41543 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2996 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3095 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41485 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/t-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41601 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/validate.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2841 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/validate.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41316 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/workqueue.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2809 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/dirmngr/workqueue.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41280 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/armor.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1620 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/armor.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40055 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/build-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1524 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/build-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39941 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1916 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40363 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1900 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40347 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-keyboxd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1572 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/call-keyboxd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40003 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/card-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1972 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/card-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40419 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cipher-aead.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1796 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cipher-aead.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40243 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cipher-cfb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1788 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cipher-cfb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40234 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/compress-bz2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1540 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/compress-bz2.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39973 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/compress.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1532 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/compress.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39967 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1684 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/cpr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40131 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/dearmor.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1836 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/dearmor.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40283 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/decrypt-data.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1780 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/decrypt-data.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40227 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/decrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1772 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/decrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40219 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/delkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1868 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/delkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40315 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/ecdh.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1732 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/ecdh.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40179 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/encrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1804 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/encrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40251 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/exec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1980 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/exec.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40427 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/expand-group.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1564 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/expand-group.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39999 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/export.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1852 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/export.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40299 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/free-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1548 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/free-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39983 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/getkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1556 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/getkey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39991 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpg.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1500 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpg.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39938 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpgsql.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1964 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpgsql.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40411 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2004 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/gpgv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40451 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/helptext.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1884 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/helptext.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40329 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/import.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1844 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/import.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40291 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/kbnode.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1604 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/kbnode.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40039 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/key-check.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1996 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/key-check.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40443 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/key-clean.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1988 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/key-clean.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40435 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1580 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40015 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyedit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1508 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyedit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39939 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keygen.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1876 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keygen.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40323 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1668 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40111 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keylist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1708 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keylist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40155 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyring.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1588 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyring.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40023 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1892 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/keyserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40339 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/mainproc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1612 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/mainproc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40047 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/mdfilter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1628 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/mdfilter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40063 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/migrate.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1860 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/migrate.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40307 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1652 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40087 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/objcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1724 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/objcache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40171 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/openfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1660 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/openfile.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40103 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/parse-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1676 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/parse-packet.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40121 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1764 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40211 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/photoid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1908 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/photoid.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40355 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pkclist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1740 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pkclist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40187 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pkglue.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1716 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pkglue.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40161 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/plaintext.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1692 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/plaintext.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40139 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/progress.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1644 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/progress.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40079 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pubkey-enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1756 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/pubkey-enc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40203 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/revoke.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1828 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/revoke.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40275 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1516 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39940 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/seskey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1596 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/seskey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40031 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/sig-check.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1700 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/sig-check.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40147 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/sign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1812 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/sign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40260 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/skclist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1748 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/skclist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40195 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-keydb-get-keyblock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2028 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-keydb-get-keyblock.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40487 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2012 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40467 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-stutter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2036 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/t-stutter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40495 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tdbdump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1940 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tdbdump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40387 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tdbio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1948 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tdbio.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40395 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/test-stubs.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2020 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/test-stubs.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40477 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/textfilter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1636 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/textfilter.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40071 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tofu.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1956 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/tofu.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40403 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/trust.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1924 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/trust.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40371 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/trustdb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1932 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/trustdb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40379 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/verify.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1820 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g10/verify.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40261 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/backend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2687 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/backend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41155 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-dmcrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2711 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-dmcrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41180 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-encfs.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2695 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-encfs.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41166 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-truecrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2703 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/be-truecrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41174 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/call-syshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2671 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/call-syshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41142 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/create.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2639 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/create.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41110 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2607 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13-common.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41074 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13-syshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2727 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13-syshelp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41198 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2599 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41073 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13tuple.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2623 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/g13tuple.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41076 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/keyblob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2615 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/keyblob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41075 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/mount.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2647 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/mount.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41118 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/mountinfo.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2663 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/mountinfo.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41134 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/runner.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2679 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/runner.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41150 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2631 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41102 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-blockdev.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2743 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-blockdev.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41212 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-cmd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2735 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-cmd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41206 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-dmcrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2751 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/sh-dmcrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41218 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/suspend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2655 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/suspend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41121 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/t-g13tuple.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2719 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/g13/t-g13tuple.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41186 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-cache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1238 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-cache.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39673 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-kbx.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1247 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-kbx.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39680 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-sqlite.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1256 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-sqlite.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39688 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1229 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/backend-support.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39664 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/frontend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1220 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/frontend.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39647 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbx-client-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1409 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbx-client-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1490 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbx-client-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39844 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbx-client-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39925 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbxserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1211 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbxserver.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39644 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbxutil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1121 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/kbxutil.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39561 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1148 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1283 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1355 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1436 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39565 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39721 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39790 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-blob.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39865 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1193 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1328 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1400 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1481 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39628 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39757 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39831 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-dump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39916 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1157 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1292 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1364 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1445 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39592 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39720 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39795 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-file.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39880 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1139 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1274 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1346 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1427 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39564 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39709 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39781 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-init.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39860 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1184 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1319 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1391 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1472 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39613 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39756 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39824 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39903 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1166 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1301 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1373 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1454 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39598 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39736 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39808 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-search.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39889 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1175 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1310 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1382 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1463 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39608 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39745 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39817 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-update.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39898 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1130 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1265 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1337 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1418 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39563 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39700 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39772 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keybox-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39853 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keyboxd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 1202 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/kbx/keyboxd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 39637 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/apdu.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2509 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/apdu.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40950 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-dinsig.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2565 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-dinsig.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41036 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-geldkarte.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2581 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-geldkarte.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41052 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2533 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-help.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41001 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-nks.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2557 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-nks.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41028 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2541 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-openpgp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41006 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-p15.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2573 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-p15.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41044 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-piv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2549 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-piv.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41020 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-sc-hsm.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2589 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app-sc-hsm.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41060 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2525 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/app.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40996 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/atr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2501 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/atr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40949 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/command.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2493 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/command.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40948 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/iso7816.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2517 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/iso7816.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40988 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2485 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/scd/scdaemon.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40947 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/call-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2078 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/call-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40537 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2086 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40545 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certchain.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2126 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certchain.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40583 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certcheck.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2118 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certcheck.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40575 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certdump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2110 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certdump.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40569 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2102 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certlist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40555 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certreqgen-ui.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2206 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certreqgen-ui.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40665 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certreqgen.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2198 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/certreqgen.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40655 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/decrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2166 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/decrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40623 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/delete.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2190 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/delete.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40649 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/encrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2158 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/encrypt.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40617 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/export.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2182 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/export.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40641 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/fingerprint.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2094 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/fingerprint.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40554 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/gpgsm.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2046 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/gpgsm.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40508 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2174 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/import.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40633 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2062 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/keydb.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40510 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2134 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/keylist.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40592 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2214 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2248 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40673 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40707 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2054 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40509 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2230 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/passphrase.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40687 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/qualified.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2222 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/qualified.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40681 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2070 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40511 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2150 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/sign.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40608 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/t-minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2239 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/t-minip12.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40698 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/verify.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 2142 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/sm/verify.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 40601 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tests/gpgscm/ffi.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3651 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tests/gpgscm/ffi.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 42112 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tests/gpgscm/main.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3642 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tests/gpgscm/main.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 42111 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3242 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/call-dirmngr.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41776 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-call-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3155 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-call-scd.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41676 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-keys.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3163 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-keys.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41684 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3179 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-misc.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41698 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-yubikey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3171 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/card-yubikey.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41688 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-card.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3147 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-card.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41650 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-check-pattern.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3349 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-check-pattern.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41932 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-connect-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3139 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-connect-agent.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41649 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-pair-tool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3358 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-pair-tool.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41941 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-wks-client.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3188 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-wks-client.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41709 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-wks-server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3251 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpg-wks-server.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41809 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgconf-comp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3131 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgconf-comp.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41647 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgconf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3123 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgconf.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41645 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgsplit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3304 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgsplit.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41885 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-create.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3322 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-create.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41905 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-extract.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3331 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-extract.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41914 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-list.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3340 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar-list.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41923 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3313 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/gpgtar.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41896 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-maker.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3224 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-maker.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3287 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-maker.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41756 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-maker.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41870 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-parser.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3215 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-parser.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3278 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-parser.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41749 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/mime-parser.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41857 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/send-mail.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3233 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/send-mail.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3296 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/send-mail.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41761 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/send-mail.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41879 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-receive.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3206 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-receive.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3269 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-receive.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41725 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-receive.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41837 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3197 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 3260 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41718 terminated by signal 6",
                    "verbosity_level": 0
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
                    "file_name": "gnupg-2.3.2/tools/wks-util.c",
                    "line": 0,
                    "event": "internal warning",
                    "message": "child 41828 terminated by signal 6",
                    "verbosity_level": 0
                }
            ]
        }
    ]
}
