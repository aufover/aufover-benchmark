{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libqb-2.0.3-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libqb-2.0.3-2.fc35/valgrind/output",
        "time-created": "2022-11-24 07:44:03",
        "time-finished": "2022-11-24 07:52:47",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libqb-2.0.3-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libqb-2.0.3-2.fc35/libqb-2.0.3-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libqb-2.0.3/examples/simplelog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/examples/simplelog.c",
                    "line": 252,
                    "column": 28,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 |                 logfile[5] = 'a';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \tif (do_blackbox) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   \t\tlogfile = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \t\tlogfile[5] = 'a';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \t\tqb_log_fini();",
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
                    "file_name": "libqb-2.0.3/lib/ipc_setup.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'handle_new_connection'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/ipc_setup.c",
                    "line": 679,
                    "column": 15,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chown' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679 |         (void)chown(c->description, c->auth.uid, c->auth.gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   \t/* chown can fail because we might not be root */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|-> \t(void)chown(c->description, c->auth.uid, c->auth.gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|   \t/* We can't pass just a directory spec to the clients */",
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
                    "file_name": "libqb-2.0.3/lib/ipc_shm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'qb_ipcs_shm_connect'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/ipc_shm.c",
                    "line": 362,
                    "column": 23,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chown' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362 |                 (void)chown(dirname, c->auth.uid, c->auth.gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   \tif (slash) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|   \t\t*slash = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|-> \t\t(void)chown(dirname, c->auth.uid, c->auth.gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   ",
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
                    "file_name": "libqb-2.0.3/lib/ipc_socket.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'qb_ipc_dgram_sock_setup'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/ipc_socket.c",
                    "line": 112,
                    "column": 23,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chown' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112 |                 (void)chown(local_address.sun_path, -1, gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   \tif (use_filesystem_sockets()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   \t\t(void)chmod(local_address.sun_path, 0660);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|-> \t\t(void)chown(local_address.sun_path, -1, gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   \tif (res < 0) {",
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
                    "file_name": "libqb-2.0.3/tests/.libs/crash_test_dummy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1966",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 489,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "32 bytes in 1 blocks are possibly lost in loss record 72 of 94",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 489,
                    "event": "note",
                    "message": "called from qb_log_callsites_register()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log_dcs.c",
                    "line": 55,
                    "event": "note",
                    "message": "called from _log_register_callsites()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/array.c",
                    "line": 163,
                    "event": "note",
                    "message": "called from qb_array_index()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log_dcs.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from _log_dcs_new_cs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log_dcs.c",
                    "line": 137,
                    "event": "note",
                    "message": "called from qb_log_dcs_get()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 339,
                    "event": "note",
                    "message": "called from qb_log_callsite_get2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/ringbuffer.c",
                    "line": 236,
                    "event": "note",
                    "message": "called from qb_rb_open_2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log_blackbox.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from qb_log_blackbox_open()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 1025,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 1073,
                    "event": "note",
                    "message": "called from qb_log_ctl2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 87,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|   \tpthread_rwlock_unlock(&_listlock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|-> \tsect = calloc(1, sizeof(struct callsite_section));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|   \tif (sect == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\treturn -ENOMEM;",
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
                    "file_name": "libqb-2.0.3/tests/.libs/crash_test_dummy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1966",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 607,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "48 bytes in 1 blocks are possibly lost in loss record 79 of 94",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 607,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 761,
                    "event": "note",
                    "message": "called from qb_log_filter_ctl2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 80,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   \t\t\treturn -EEXIST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|-> \t\tflt = calloc(1, sizeof(struct qb_log_filter));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \t\tif (flt == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   \t\t\treturn -ENOMEM;",
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
                    "file_name": "libqb-2.0.3/tests/.libs/crash_test_dummy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1966",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 614,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2 bytes in 1 blocks are possibly lost in loss record 1 of 94",
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
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 614,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/lib/log.c",
                    "line": 761,
                    "event": "note",
                    "message": "called from qb_log_filter_ctl2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 80,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|   \t\tflt->conf = c;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|   \t\tflt->type = type;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|-> \t\tflt->text = strdup(text);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|   \t\tif (flt->text == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|   \t\t\t_log_free_filter(flt);",
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
                    "file_name": "libqb-2.0.3/tests/check_ipc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'set_ipc_name'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/check_ipc.c",
                    "line": 228,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228 |                 fgets(process_name, sizeof(process_name), f);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|   \tf = fopen(\"ipc-test-name\", \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   \tif (f) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|-> \t\tfgets(process_name, sizeof(process_name), f);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   \t\tfclose(f);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   \t\tsnprintf(ipc_name, sizeof(ipc_name), \"%.44s%s\", prefix, process_name);",
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
                    "file_name": "libqb-2.0.3/tests/.libs/crash_test_dummy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1966",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 106,
                    "event": "warning[InvalidWrite]",
                    "message": "Invalid write of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 106,
                    "event": "note",
                    "message": "Address 0x5 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 106,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|          \tlogfile = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|-> \tlogfile[5] = 'a';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   \treturn 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   }",
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
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libqb-2.0.3/tests/crash_test_dummy.c",
                    "line": 106,
                    "column": 20,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |         logfile[5] = 'a';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|          \tlogfile = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|-> \tlogfile[5] = 'a';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   \treturn 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
