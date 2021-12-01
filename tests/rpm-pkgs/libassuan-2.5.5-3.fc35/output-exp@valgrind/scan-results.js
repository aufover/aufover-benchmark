{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libassuan-2.5.5-3.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/valgrind/output",
        "time-created": "2021-12-01 11:38:40",
        "time-finished": "2021-12-01 11:40:02",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/valgrind/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/libassuan-2.5.5-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects": ""
}
