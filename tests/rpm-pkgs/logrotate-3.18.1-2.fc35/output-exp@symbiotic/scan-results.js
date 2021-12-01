{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211119.190944",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "logrotate-3.18.1-2.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/symbiotic/output",
        "time-created": "2021-12-01 15:29:43",
        "time-finished": "2021-12-01 15:36:35",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/logrotate-3.18.1-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "logrotate-3.18.1/logrotate.c",
                    "line": 1083,
                    "column": 17,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ptr' set but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|       size_t total = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|->     const char *ptr = (const char *) buf;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|       while (count > 0)",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
