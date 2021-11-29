{
    "scan": {
        "analyzer-version-cbmc": "5.38.0",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gzip-1.10-5.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/cbmc/output",
        "time-created": "2021-11-29 13:54:14",
        "time-finished": "2021-11-29 14:35:21",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/cbmc/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/gzip-1.10-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211126.090206.ga7412e7-1.fc34"
    },
    "defects": ""
}
