{
    "scan": {
        "analyzer-version-cbmc": "5.38.0",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmaxminddb-1.5.2-2.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/cbmc/output",
        "time-created": "2021-12-01 15:19:05",
        "time-finished": "2021-12-01 15:23:55",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/cbmc/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/libmaxminddb-1.5.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211130.141423.g64dd084.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: invalid integer address in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer invalid in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘strcmp’:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "error",
                    "message": "pointer_arithmetic : pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 48,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 49,
                    "event": "note",
                    "message": "main:49:pointer:        test_db_dir = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 53,
                    "event": "note",
                    "message": "main:53:array:        cwd = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "main:54:pointer:        UNUSED_tmp = ((char *)NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-call:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 54,
                    "event": "note",
                    "message": "from_main:function-return:getcwd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-return:__xpg_basename",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "from_main:function-call:strcmp",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s1 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/bad_databases_t.c",
                    "line": 56,
                    "event": "note",
                    "message": "function_parameter_set_in:main:56:pointer:        s2 = ?",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in s1 + (signed long int)i",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/<builtin-library-strcmp>",
                    "line": 30,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in s1 + (signed long int)i",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
