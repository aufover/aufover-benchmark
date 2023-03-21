{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "usbguard-1.0.0-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/usbguard-1.0.0-6.fc35/valgrind/output",
        "time-created": "2022-11-24 07:53:11",
        "time-finished": "2022-11-24 08:05:54",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/usbguard-1.0.0-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/usbguard-1.0.0-6.fc35/usbguard-1.0.0-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "usbguard-1.0.0/src/Daemon/Daemon.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void usbguard::Daemon::run()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "usbguard-1.0.0/src/Daemon/Daemon.cpp",
                    "line": 577,
                    "column": 18,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int lockf(int, int, __off_t)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577 |       (void)lockf(pid_fd, F_ULOCK, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576|       if (pid_fd != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577|->       (void)lockf(pid_fd, F_ULOCK, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  578|         (void)close(pid_fd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  579|       }",
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
                    "file_name": "usbguard-1.0.0/src/Daemon/Daemon.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void usbguard::Daemon::daemonize(const string&)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "usbguard-1.0.0/src/Daemon/Daemon.cpp",
                    "line": 646,
                    "column": 16,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'int chdir(const char*)' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646 |     (void)chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1plus",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-deprecated-register' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  644|       /* Now we are forked 2nd time */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  645|       umask(0047);  /* no need for world-accessible or executable files */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646|->     (void)chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|       const std::array<int, 3> std_fds {{STDIN_FILENO, STDOUT_FILENO, STDERR_FILENO}};",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|       int fd_null;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
