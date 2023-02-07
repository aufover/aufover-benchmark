{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libpwquality-1.4.4-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpwquality-1.4.4-6.fc35/divine/output",
        "time-created": "2023-01-26 06:02:23",
        "time-finished": "2023-01-26 06:07:20",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpwquality-1.4.4-6.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpwquality-1.4.4-6.fc35/libpwquality-1.4.4-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
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
                    "file_name": "libpwquality-1.4.4/src/pam_pwquality.c",
                    "line": 115,
                    "column": 24,
                    "event": "warning",
                    "message": "implicit declaration of function 'fgetpwent_r' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                errn = fgetpwent_r(fp, &pw, buf, sizeof (buf), &pwp);",
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
                    "message": "  113|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|           for (;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->                 errn = fgetpwent_r(fp, &pw, buf, sizeof (buf), &pwp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|                   if (errn == ERANGE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|                           pam_syslog(pamh, LOG_WARNING, \"%s contains very long lines; corrupted?\",",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
