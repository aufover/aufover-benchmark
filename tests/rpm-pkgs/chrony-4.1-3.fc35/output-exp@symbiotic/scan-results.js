{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "chrony-4.1-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/symbiotic/output",
        "time-created": "2023-01-31 12:17:34",
        "time-finished": "2023-01-31 12:46:43",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/chrony-4.1-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 727,
                    "column": 54,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (which_clock == CLOCK_REALTIME || which_clock == REFCLK_ID)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                            ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|   \ttime_to_timespec(time, tp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|   \t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  727|-> \tif (which_clock == CLOCK_REALTIME || which_clock == REFCLK_ID)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  728|   \t\ttp->tv_sec += system_time_offset;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 799,
                    "column": 39,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        assert(id == CLOCK_REALTIME || id == SYSCLK_CLOCKID || id == REFCLK_ID);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 78,
                    "column": 48,
                    "event": "note",
                    "message": "expanded from macro 'SYSCLK_CLOCKID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SYSCLK_CLOCKID ((~(clockid_t)SYSCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/assert.h",
                    "line": 106,
                    "column": 11,
                    "event": "note",
                    "message": "expanded from macro 'assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (expr)                                                         \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|   int clock_adjtime(clockid_t id, struct timex *tx) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|-> \tassert(id == CLOCK_REALTIME || id == SYSCLK_CLOCKID || id == REFCLK_ID);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \tif (id == SYSCLK_CLOCKID) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 799,
                    "column": 63,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        assert(id == CLOCK_REALTIME || id == SYSCLK_CLOCKID || id == REFCLK_ID);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|   int clock_adjtime(clockid_t id, struct timex *tx) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|-> \tassert(id == CLOCK_REALTIME || id == SYSCLK_CLOCKID || id == REFCLK_ID);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \tif (id == SYSCLK_CLOCKID) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 801,
                    "column": 12,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (id == SYSCLK_CLOCKID) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 78,
                    "column": 48,
                    "event": "note",
                    "message": "expanded from macro 'SYSCLK_CLOCKID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SYSCLK_CLOCKID ((~(clockid_t)SYSCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/builddir/build/BUILD/chrony-4.1/test/simulation/clknetsim/client.c:824:19:#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/assert.h",
                    "line": 106,
                    "column": 11,
                    "event": "note",
                    "message": "expanded from macro 'assert'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (expr)                                                         \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  799|   \tassert(id == CLOCK_REALTIME || id == SYSCLK_CLOCKID || id == REFCLK_ID);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|-> \tif (id == SYSCLK_CLOCKID) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|   \t\t/* allow large frequency adjustment by setting ticks */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 824,
                    "column": 19,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        } else if (id == REFCLK_ID) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  822|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  823|   \t\treturn r;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  824|-> \t} else if (id == REFCLK_ID) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  825|   \t\tif (tx->modes) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  826|   \t\t\terrno = EINVAL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 1638,
                    "column": 17,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                clock_gettime(REFCLK_ID, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1636|   \t\t\tsys_off->n_samples = PTP_MAX_SAMPLES;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1637|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1638|-> \t\tclock_gettime(REFCLK_ID, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1639|   \t\tfor (i = 0; i < sys_off->n_samples; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1640|   \t\t\tsys_off->ts[2 * i + 1].sec = ts.tv_sec;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 1655,
                    "column": 17,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                clock_gettime(REFCLK_ID, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1653|   \t\tstruct timespec ts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1654|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1655|-> \t\tclock_gettime(REFCLK_ID, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1656|   \t\tsys_off->device.sec = ts.tv_sec;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1657|   \t\tsys_off->device.nsec = ts.tv_nsec;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 2062,
                    "column": 37,
                    "event": "warning[-Wshift-negative-value]",
                    "message": "shifting a negative signed value is undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        clock_gettime(timestamping > 1 ? REFCLK_ID : CLOCK_REALTIME, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                         ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/simulation/clknetsim/client.c",
                    "line": 75,
                    "column": 43,
                    "event": "note",
                    "message": "expanded from macro 'REFCLK_ID'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REFCLK_ID ((~(clockid_t)REFCLK_FD << 3) | 3)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2060|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2061|   \t\tif (sockets[s].time_stamping & SOF_TIMESTAMPING_RAW_HARDWARE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2062|-> \t\t\tclock_gettime(timestamping > 1 ? REFCLK_ID : CLOCK_REALTIME, &ts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2063|   \t\t\tif (!(flags & MSG_ERRQUEUE))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2064|   \t\t\t\tadd_to_timespec(&ts, -(8 * (msglen + 42 + 4) / (1e6 * LINK_SPEED)));",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
