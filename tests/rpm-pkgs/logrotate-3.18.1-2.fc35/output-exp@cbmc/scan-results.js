{
    "scan": {
        "analyzer-version-cbmc": "5.38.0",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "logrotate-3.18.1-2.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/cbmc/output",
        "time-created": "2021-12-01 15:29:02",
        "time-finished": "2021-12-01 15:39:55",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/cbmc/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/logrotate-3.18.1-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211130.141423.g64dd084.divine-1.fc34"
    },
    "defects": ""
}
