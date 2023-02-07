{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "ding-libs-0.6.1-48.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/valgrind/output",
        "time-created": "2022-11-23 16:01:06",
        "time-finished": "2022-11-23 16:07:41",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/ding-libs-0.6.1-48.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'basic_test'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut.c",
                    "line": 240,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240 |     (void)system(command);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|        * we need to clean. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|       snprintf(command, PATH_MAX * 3, \"rm %s/*~ > /dev/null 2>&1\", indir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|->     (void)system(command);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|       /* Make the file path independent */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_augment_merge_sections_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 101,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     fail_unless(ret == 0, \"Failed to write %s: ret %d.\\n\", base_path, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|       ret = write_to_file(base_path, config_base);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->     fail_unless(ret == 0, \"Failed to write %s: ret %d.\\n\", base_path, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       write_to_file(augment_path, config_augment);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 104,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 |     fail_unless(ret == 0, \"Failed to write %s: ret %d.\\n\", augment_path, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       write_to_file(augment_path, config_augment);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|->     fail_unless(ret == 0, \"Failed to write %s: ret %d.\\n\", augment_path, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|       for (iter = 0; iter < 3; iter++) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 135,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135 |         fail_unless(ret == EOK, \"Failed to create collection. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|           /* Create config collection */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|           ret = ini_config_create(&in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|->         fail_unless(ret == EOK, \"Failed to create collection. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|                       ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 140,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140 |         fail_unless(ret == EOK, \"Failed to open file. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|           /* Open base.conf */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|           ret = ini_config_file_open(base_path, 0, &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|->         fail_unless(ret == EOK, \"Failed to open file. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           /* Seed in_cfg with base.conf */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 144,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144 |         fail_unless(ret == EOK, \"Failed to parse file context. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           /* Seed in_cfg with base.conf */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           ret = ini_config_parse(file_ctx, 1, 0, 0, in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|->         fail_unless(ret == EOK, \"Failed to parse file context. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|                       ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 162,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162 |                     \"Failed to augment context. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           /* We always expect EEXIST due to DETECT being set. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|           fail_unless(ret == EEXIST,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|->                     \"Failed to augment context. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|           if (result_cfg) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 172,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172 |         fail_unless(ret == EOK, \"Failed to get section list. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|           /* Get a list of sections from the resulting cfg. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|           sections = ini_get_section_list(in_cfg, &sections_count, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|->         fail_unless(ret == EOK, \"Failed to get section list. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|           /* Validate that the tested section exists. */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 176,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176 |         fail_if(ret == 0, \"Failed to find expected section.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|           /* Validate that the tested section exists. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|           ret = exists_array(test_section, sections, sections_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|->         fail_if(ret == 0, \"Failed to find expected section.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|           /* Get a list of attributes from the resulting cfg. */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 182,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182 |         fail_unless(ret == EOK, \"Failed to get attribute list. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|                                               &attributes_count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|                                               &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|->         fail_unless(ret == EOK, \"Failed to get attribute list. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                       ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 188,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |                     \"Expected %d attributes, but received %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|            * distinguishes MERGE from PRESERVE/OVERWRITE. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           fail_unless(expected_attributes_count == attributes_count,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->                     \"Expected %d attributes, but received %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|                       expected_attributes_count, attributes_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 194,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |         fail_if(ret == 0, \"Failed to find expected attribute.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|            * PRESERVE from OVERWRITE. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           ret = exists_array(test_attribute, attributes, attributes_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->         fail_if(ret == 0, \"Failed to find expected attribute.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|           ret = ini_get_config_valueobj(test_section, test_attribute, in_cfg,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 198,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198 |         fail_unless(ret == EOK, \"Failed to load value object. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|           ret = ini_get_config_valueobj(test_section, test_attribute, in_cfg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|                                           0, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|->         fail_unless(ret == EOK, \"Failed to load value object. Error %d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|                       ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 202,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |         fail_unless(ret == EOK, \"Failed to get config value. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|           val_str = ini_get_string_config_value(val, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|->         fail_unless(ret == EOK, \"Failed to get config value. Error %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|           /* Validate the value of the test attribute. */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 207,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207 |         fail_unless(ret == 0, \"Attribute %s didn't have expected value of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|           ret = strcmp(val_str, test_attribute_value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|->         fail_unless(ret == 0, \"Attribute %s didn't have expected value of \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|                       \"(%s): saw %s\\n\", test_attribute, test_attribute_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|                       val_str);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_augment_empty_dir_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 252,
                    "column": 40,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 |     fail_if(ret > PATH_MAX || ret < 0, \"snprintf failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|       ret = snprintf(empty_dir_path, PATH_MAX, \"%s/tmp_empty_dir\", builddir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|->     fail_if(ret > PATH_MAX || ret < 0, \"snprintf failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|       ret = ini_config_file_from_mem(base_cfg, strlen(base_cfg),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 256,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|       ret = ini_config_file_from_mem(base_cfg, strlen(base_cfg),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|                                      &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 259,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|                              ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 262,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262 |     fail_unless(ret == EOK, \"Failed to parse configuration. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|                              ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|->     fail_unless(ret == EOK, \"Failed to parse configuration. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|       /* Create an empty directory */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 269,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269 |                 \"Failed to create empty directory. Error %d.\\n\", errno);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|           ret = errno;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|           fail_if(ret != EEXIST,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|->                 \"Failed to create empty directory. Error %d.\\n\", errno);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_augment_ut_check.c",
                    "line": 309,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 |     fail_unless(val == 1, \"Expected attribute value not found.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|       val = ini_get_int32_config_value(vo, 1, 100, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|->     fail_unless(val == 1, \"Expected attribute value not found.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|       ini_free_attribute_list(attrs_list);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dump_configuration'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 54,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 |                 \"Failed to allocate buffer. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|       ret = simplebuffer_alloc(&sbobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|       fail_unless(ret == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|->                 \"Failed to allocate buffer. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       ret = ini_config_serialize(in_cfg, sbobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 58,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58 |                 \"Failed to serialize. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       ret = ini_config_serialize(in_cfg, sbobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|       fail_unless(ret == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->                 \"Failed to serialize. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       buff = simplebuffer_get_vbuf(sbobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 64,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64 |             \"Failed to write to file. Error: %d %s\\n\", ret, strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|       ret = fwrite(buff, 1, len, file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       fail_if(ret == -1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->             \"Failed to write to file. Error: %d %s\\n\", ret, strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|       simplebuffer_free(sbobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'call_diff'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 92,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 |     fail_if(expected_fd == -1, \"mkstemp failed: %s\\n\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       expected_fd = mkstemp(expected_fn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|->     fail_if(expected_fd == -1, \"mkstemp failed: %s\\n\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|       ret = write(expected_fd, expected_cfg, expected_cfg_len);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 96,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |             \"Failed write to %s. Error %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|       ret = write(expected_fd, expected_cfg, expected_cfg_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|       fail_if(ret == -1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->             \"Failed write to %s. Error %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|               expected_fn, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 102,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |     fail_if(res_fd == -1, \"mkstemp failed: %s\\n\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       res_fd = mkstemp(res_fn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->     fail_if(res_fd == -1, \"mkstemp failed: %s\\n\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       ret = write(res_fd, res_cfg, res_cfg_len);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 106,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |             \"Failed write to %s. Error %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       ret = write(res_fd, res_cfg, res_cfg_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       fail_if(ret == -1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->             \"Failed write to %s. Error %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|               expected_fn, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|       close(res_fd);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 113,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 |             \"Failed to execute command:%s. Erorr %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|       ret = system(command);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|       fail_if(ret == -1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->             \"Failed to execute command:%s. Erorr %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|               command, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_assert_configuration_equal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 138,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 |             \"\\n\\t[%s:%d] open_memstream failed.\", file, line);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       f_memstream = open_memstream(&res_buffer, &res_buffer_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       fail_if(f_memstream == NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->             \"\\n\\t[%s:%d] open_memstream failed.\", file, line);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       dump_configuration(res_cfg, f_memstream);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 144,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144 |                 \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|       fail_unless(expected_cfg_len == res_buffer_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|->                 \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|                   \"does not match. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|                   file, line, expected_cfg_len, res_buffer_size,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 144,
                    "column": 17,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 8 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144 |                 \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145 |                 \"does not match. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146 |                 file, line, expected_cfg_len, res_buffer_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 144,
                    "column": 77,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144 |                 \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                            ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                             |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                             int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                            %ld",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|       fail_unless(expected_cfg_len == res_buffer_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|->                 \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|                   \"does not match. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|                   file, line, expected_cfg_len, res_buffer_size,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 152,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152 |                 \"\\n\\t[%s:%d] Configurations are not identical. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|       ret = memcmp(res_buffer, expected_cfg, expected_cfg_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|       fail_unless(ret == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|->                 \"\\n\\t[%s:%d] Configurations are not identical. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|                   file, line,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|                   call_diff(function, expected_cfg, expected_cfg_len,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_ini_config_from_str'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 168,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|       ret = ini_config_create(&in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|       ret = ini_config_file_from_mem(input_data, input_data_len, &file_ctx);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 171,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|       ret = ini_config_file_from_mem(input_data, input_data_len, &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|       ret = ini_config_parse(file_ctx, INI_STOP_ON_NONE, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 175,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175 |     fail_unless(ret == EOK, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|       ret = ini_config_parse(file_ctx, INI_STOP_ON_NONE, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|                              in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|->     fail_unless(ret == EOK, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       ini_config_file_destroy(file_ctx);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_delete_value_wrong_arguments_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 197,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 |     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       /* missing ini_config */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|       ret = ini_config_delete_value(NULL, \"one\", COL_DSP_NDUP, \"key1\", 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|->     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|       assert_configuration_equal(exp_data, sizeof(exp_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 202,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|       /* missing section */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       ret = ini_config_delete_value(in_cfg, NULL, COL_DSP_NDUP, \"key1\", 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|->     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|       assert_configuration_equal(exp_data, sizeof(exp_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 207,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207 |     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|       /* missing key */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|       ret = ini_config_delete_value(in_cfg, \"one\", COL_DSP_NDUP, NULL, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|->     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|       assert_configuration_equal(exp_data, sizeof(exp_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 212,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212 |     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|       /* value index is too low */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|       ret = ini_config_delete_value(in_cfg, \"one\", COL_DSP_NDUP, \"key1\", -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|->     fail_unless(ret == EINVAL, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       assert_configuration_equal(exp_data, sizeof(exp_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 217,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217 |     fail_unless(ret == ENOENT, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|       /* value index is too high */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|       ret = ini_config_delete_value(in_cfg, \"one\", COL_DSP_NDUP, \"key1\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|->     fail_unless(ret == ENOENT, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       assert_configuration_equal(exp_data, sizeof(exp_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_delete_value_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 248,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248 |     fail_unless(ret == EOK, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|       ret = ini_config_delete_value(in_cfg, \"one\", COL_DSP_NDUP, \"key1\", 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|->     fail_unless(ret == EOK, \"delete value should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|       assert_configuration_equal(delete_first, sizeof(delete_first), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_update_comments_wrong_arguments_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 278,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278 |     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|       /* missing ini_config */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|       ret = ini_config_update_comment(NULL, \"one\", \"key1\", comment, 1, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|->     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 283,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283 |     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|       /* missing section */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|       ret = ini_config_update_comment(in_cfg, NULL, \"key1\", comment, 1, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 288,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288 |     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|       /* missing key */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|       ret = ini_config_update_comment(in_cfg, \"one\", NULL, comment, 1, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|->     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 293,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293 |     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       /* wrong section */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|       ret = ini_config_update_comment(in_cfg, \"noexist\", \"key1\", comment, 1, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|->     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 298,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298 |     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|       /* wrong key */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|       ret = ini_config_update_comment(in_cfg, \"one\", \"noexist\", comment, 1, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|->     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 303,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 |     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       /* value index is too low */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comment, 1, -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|->     fail_unless(ret == EINVAL, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 308,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308 |     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|       /* value index is too high */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comment, 1, 5);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|->     fail_unless(ret == ENOENT, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_update_comments_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 400,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|       /* add comments with size */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comments, 1, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|       assert_configuration_equal(exp_data_1comment, sizeof(exp_data_1comment),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|                                  in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 411,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|       /* add comments with size */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comments, 2, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|       assert_configuration_equal(exp_data_2comments, sizeof(exp_data_2comments),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|                                  in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 421,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|       /* add comments (NULL terminated array), size is 0 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comments, 0, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|       assert_configuration_equal(exp_data_2comments, sizeof(exp_data_2comments),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|                                  in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 431,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|       /* add comments (NULL terminated array), size is 0 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comments, 1, 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       assert_configuration_equal(exp_data_1comment_after2,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|                                  sizeof(exp_data_1comment_after2),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 442,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|       /* replace comment */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\", comments, 0, 4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|       assert_configuration_equal(exp_replaced, sizeof(exp_replaced),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|                                  in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 453,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|                                       empty_comment, 0, 4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|       assert_configuration_equal(exp_removed_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|                                  sizeof(exp_removed_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 465,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465 |     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|       ret = ini_config_update_comment(in_cfg, \"one\", \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|                                       NULL, 0, 4);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|->     fail_unless(ret == EOK, \"update commants should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|       assert_configuration_equal(exp_removed_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|                                  sizeof(exp_removed_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_wrong_arguments_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 493,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493 |     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493|->     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 500,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500 |     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|->     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 507,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507 |     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|->     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 514,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514 |     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|->     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 521,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521 |     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|                                      -1, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|->     fail_unless(ret == EINVAL, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 528,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528 |     fail_unless(ret == ENOSYS, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|                                      comments, 2, WRAP_SIZE, COL_DSP_END, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527|                                      0, 0xff);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528|->     fail_unless(ret == ENOSYS, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 535,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535 |     fail_unless(ret == ENOENT, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|                                      \"key1\", 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|->     fail_unless(ret == ENOENT, \"Add str should fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_simple_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 616,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|                                      NULL, 0, WRAP_SIZE, COL_DSP_END, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|       assert_configuration_equal(add_new_value_to_end,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|                                  sizeof(add_new_value_to_end), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 628,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|                                      comments, 2, WRAP_SIZE, COL_DSP_END, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|       assert_configuration_equal(add_new_value_to_end_with_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|                                  sizeof(add_new_value_to_end_with_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 642,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  642 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  640|                                      NULL, 0, WRAP_SIZE, COL_DSP_FRONT, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  641|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  642|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  643|       assert_configuration_equal(add_new_value_to_front,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  644|                                  sizeof(add_new_value_to_front), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 654,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|                                      comments, 2, WRAP_SIZE, COL_DSP_FRONT, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|       assert_configuration_equal(add_new_value_to_front_with_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|                                  sizeof(add_new_value_to_front_with_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 667,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 680,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|                                      1, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  682|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 693,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|                                      1000, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 706,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  704|                                      NULL, 0, WRAP_SIZE, COL_DSP_BEFORE, \"key2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  705|                                      0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  707|       assert_configuration_equal(add_new_value_before_key2,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  708|                                  sizeof(add_new_value_before_key2),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_duplicate_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 780,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780 |     fail_unless(ret == ENOENT, \"Add duplicate key must fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780|->     fail_unless(ret == ENOENT, \"Add duplicate key must fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  781|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  782|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 787,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787 |     fail_unless(ret == ENOENT, \"Add duplicate key must fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|                                      NULL, 0, WRAP_SIZE, COL_DSP_LASTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|->     fail_unless(ret == ENOENT, \"Add duplicate key must fail. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 794,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|       assert_configuration_equal(add_first_duplicate,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|                                  sizeof(add_first_duplicate), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 806,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  806 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|                                      \"key2\", 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  806|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  807|       assert_configuration_equal(add_first_duplicate,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  808|                                  sizeof(add_first_duplicate), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 818,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  816|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  817|                                      \"key0\", 1, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  819|       assert_configuration_equal(add_first_duplicate,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820|                                  sizeof(add_first_duplicate), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 830,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|       assert_configuration_equal(add_first_duplicate_for_multi,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|                                  sizeof(add_first_duplicate_for_multi), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 842,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  842 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  840|                                      NULL, 0, WRAP_SIZE, COL_DSP_LASTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  841|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  842|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  843|       assert_configuration_equal(add_last_duplicate,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  844|                                  sizeof(add_last_duplicate), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 854,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|                                      NULL, 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|       assert_configuration_equal(add_first_duplicate_for_multi,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|                                  sizeof(add_first_duplicate_for_multi), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 866,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  866 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  864|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  865|                                      \"key0\", 0, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  866|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  867|       assert_configuration_equal(add_first_duplicate_for_multi,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868|                                  sizeof(add_first_duplicate_for_multi), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 878,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  878 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  876|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  877|                                      NULL, 100, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  878|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  879|       assert_configuration_equal(add_last_duplicate,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  880|                                  sizeof(add_last_duplicate), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 890,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|                                      comments, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|                                      NULL, 1, INI_VA_NOCHECK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|       assert_configuration_equal(add_duplicate_with_index1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892|                                  sizeof(add_duplicate_with_index1), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_update_specific_value_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 947,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  945|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  946|                                      0, INI_VA_MOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 960,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  958|                                      NULL, 0, WRAP_SIZE, COL_DSP_BEFORE, \"key2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  959|                                      0, INI_VA_MOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|       assert_configuration_equal(input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|                                  sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 972,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  970|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  971|                                      0, INI_VA_MOD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  974|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 983,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  981|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  982|                                      0, INI_VA_MOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|       assert_configuration_equal(modify_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|                                  sizeof(modify_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 995,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  993|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  994|                                      0, INI_VA_MOD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|       assert_configuration_equal(modify_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|                                  sizeof(modify_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1007,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1005|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1006|                                      3, INI_VA_MOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1007|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1019,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1019 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1018|                                      3, INI_VA_MOD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1019|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1020|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1021|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1031,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|                                      1000, INI_VA_MOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1033|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1043,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042|                                      1000, INI_VA_MOD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|       assert_configuration_equal(input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045|                                  sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_update_MODADD_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1112,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1112 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1110|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1111|                                      0, INI_VA_MODADD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1112|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1113|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1114|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1123,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1123 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1121|                                      NULL, 0, WRAP_SIZE, COL_DSP_BEFORE, \"key2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1122|                                      0, INI_VA_MODADD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1123|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       assert_configuration_equal(modify_add_non_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|                                  sizeof(modify_add_non_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1135,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|                                      0, INI_VA_MODADD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1137|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1146,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1145|                                      0, INI_VA_MODADD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147|       assert_configuration_equal(modify_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1148|                                  sizeof(modify_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1158,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1158 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1156|                                      comments, 2, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1157|                                      0, INI_VA_MODADD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1158|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1159|       assert_configuration_equal(modify_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1160|                                  sizeof(modify_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1170,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1170 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1168|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1169|                                      3, INI_VA_MODADD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1170|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1171|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1172|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1182,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|                                      3, INI_VA_MODADD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1194,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1194 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193|                                      1000, INI_VA_MODADD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1194|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1195|       assert_configuration_equal(modify_existing_value_index,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1196|                                  sizeof(modify_existing_value_index), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1206,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1206 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1204|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1205|                                      1000, INI_VA_MODADD_E);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1206|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1207|       assert_configuration_equal(input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1208|                                  sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_simple_clean_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1288,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1288 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1286|                                      NULL, 0, WRAP_SIZE, COL_DSP_END, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1287|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1288|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1289|       assert_configuration_equal(add_new_value_to_end,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1290|                                  sizeof(add_new_value_to_end), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1300,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|                                      comments, 2, WRAP_SIZE, COL_DSP_END, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|       assert_configuration_equal(add_new_value_to_end_with_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|                                  sizeof(add_new_value_to_end_with_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1314,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1314 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1312|                                      NULL, 0, WRAP_SIZE, COL_DSP_FRONT, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1313|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1314|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1315|       assert_configuration_equal(add_new_value_to_front,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1316|                                  sizeof(add_new_value_to_front), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1326,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1326 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1324|                                      comments, 2, WRAP_SIZE, COL_DSP_FRONT, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1325|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1326|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1327|       assert_configuration_equal(add_new_value_to_front_with_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1328|                                  sizeof(add_new_value_to_front_with_comment),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1339,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1339 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1337|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1338|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1339|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1340|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1341|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1352,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1352 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1350|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1351|                                      1, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1352|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1353|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1354|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1365,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|                                      NULL, 0, WRAP_SIZE, COL_DSP_AFTER, \"key1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|                                      1000, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|       assert_configuration_equal(add_new_value_after_key1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|                                  sizeof(add_new_value_after_key1),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1378,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1378 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1376|                                      NULL, 0, WRAP_SIZE, COL_DSP_BEFORE, \"key2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1377|                                      0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1378|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1379|       assert_configuration_equal(add_new_value_before_key2,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1380|                                  sizeof(add_new_value_before_key2),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_duplicate_error_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1417,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1417 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416|                                      NULL, 0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1417|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1418|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1419|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1430,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1430 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1428|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1429|                                      NULL, 0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1430|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1431|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1432|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1443,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1443 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1441|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1442|                                      NULL, 0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1443|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1444|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1445|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1456,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1456 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1454|                                      NULL, 0, WRAP_SIZE, COL_DSP_LASTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1455|                                      NULL, 0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1456|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1457|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1458|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1469,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1469 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1467|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1468|                                      NULL, 0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1469|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1470|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1471|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1483,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1483 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1481|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1482|                                      \"key1\", 1, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1483|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1484|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1485|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1497,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1497 |     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1495|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1496|                                      NULL, 100, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1497|->     fail_unless(ret == EEXIST, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1498|       assert_configuration_equal(input_data, sizeof(input_data), in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1499|       ini_config_destroy(in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1508,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1508 |     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1506|                                      NULL, 0, WRAP_SIZE, COL_DSP_BEFORE, \"key2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1507|                                      0, INI_VA_DUPERROR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1508|->     fail_unless(ret == EOK, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1509|       assert_configuration_equal(add_non_existing_value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1510|                                  sizeof(add_non_existing_value), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_add_str_duplicate_clean_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1560,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1560 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1558|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1559|                                      NULL, 0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1560|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1561|       assert_configuration_equal(only_removed_key, sizeof(only_removed_key),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1562|                                  in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1574,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1574 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1572|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1573|                                      NULL, 0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1574|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1575|       assert_configuration_equal(only_removed_all_duplicates,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1576|                                  sizeof(only_removed_all_duplicates), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1588,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1588 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1586|                                      NULL, 0, WRAP_SIZE, COL_DSP_FIRSTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1587|                                      NULL, 0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1588|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1589|       assert_configuration_equal(only_removed_key_with_comment,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1590|                                  sizeof(only_removed_key_with_comment), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1602,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1602 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1600|                                      NULL, 0, WRAP_SIZE, COL_DSP_LASTDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1601|                                      NULL, 0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1602|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1603|       assert_configuration_equal(only_removed_all_duplicates,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1604|                                  sizeof(only_removed_all_duplicates), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1616,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1616 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1614|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1615|                                      NULL, 0, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1616|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1617|       assert_configuration_equal(only_removed_all_duplicates,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1618|                                  sizeof(only_removed_all_duplicates), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1631,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1631 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1629|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1630|                                      \"key1\", 1, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1631|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1632|       assert_configuration_equal(only_removed_all_duplicates,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1633|                                  sizeof(only_removed_all_duplicates), in_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 1646,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646 |     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1644|                                      NULL, 0, WRAP_SIZE, COL_DSP_NDUP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1645|                                      NULL, 100, INI_VA_CLEAN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646|->     fail_unless(ret == ENOENT, \"Failed to add str. Error: %d\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1647|       assert_configuration_equal(only_removed_all_duplicates,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1648|                                  sizeof(only_removed_all_duplicates), in_cfg);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_one_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut.c",
                    "line": 112,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fread' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112 |         fread(stream_data, stream_len, 1, file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|           /* Read file into memory */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|           errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->         fread(stream_data, stream_len, 1, file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|           error = ferror(file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|           if (error) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_parse_non_kvp_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 59,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|       ret = ini_config_file_from_mem(non_kvp_cfg, strlen(non_kvp_cfg),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|                                      &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|       /* First try without the INI_PARSE_IGNORE_NON_KVP. This should fail",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 64,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|        * with error. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|                              ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 67,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 |     fail_if(ret != 5, \"Expected error was not found.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|                              ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|->     fail_if(ret != 5, \"Expected error was not found.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       ini_config_destroy(ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 76,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       ret = ini_config_file_from_mem(non_kvp_cfg, strlen(non_kvp_cfg),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|                                      &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|       fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 78,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|                              INI_PARSE_IGNORE_NON_KVP,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 82,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82 |     fail_unless(ret == EOK, \"ini_config_parse returned %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|                              INI_PARSE_IGNORE_NON_KVP,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|                              ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|->     fail_unless(ret == EOK, \"ini_config_parse returned %d\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|       /* Now check if the surrounding configuration is OK */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 88,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 |     fail_unless(ret == EOK, \"ini_get_config_valueobj returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|       ret = ini_get_config_valueobj(\"section_before\", \"one\", ini_cfg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|                                     INI_GET_FIRST_VALUE, &vo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|->     fail_unless(ret == EOK, \"ini_get_config_valueobj returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 92,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 |     fail_unless(ret == EOK, \"ini_get_int_config_value returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|       value = ini_get_int_config_value(vo, 1, -1, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|->     fail_unless(ret == EOK, \"ini_get_int_config_value returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 96,
                    "column": 25,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |     fail_if(value != 1, \"Expected value 1 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|       fail_unless(ret == EOK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->     fail_if(value != 1, \"Expected value 1 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|       /* section_non_kvp */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 105,
                    "column": 25,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |     fail_if(value != 2, \"Expected value 2 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       value = ini_get_int_config_value(vo, 1, -1, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       fail_unless(ret == EOK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|->     fail_if(value != 2, \"Expected value 2 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|       ret = ini_get_config_valueobj(\"section_non_kvp\", \"three\", ini_cfg,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 113,
                    "column": 25,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 |     fail_if(value != 3, \"Expected value 3 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|       value = ini_get_int_config_value(vo, 1, -1, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|       fail_unless(ret == EOK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->     fail_if(value != 3, \"Expected value 3 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|       /* section_after */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 122,
                    "column": 25,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122 |     fail_if(value != 4, \"Expected value 4 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       value = ini_get_int_config_value(vo, 1, -1, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       fail_unless(ret == EOK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|->     fail_if(value != 4, \"Expected value 4 got %d\\n\", value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       ini_config_destroy(ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_parse_section_key_conflict_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 186,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186 |         fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|       for (iter = 0; file_contents[iter] != NULL; iter++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|           ret = ini_config_create(&ini_config);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|->         fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|           ret = ini_config_file_from_mem(file_contents[iter],",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 191,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |         fail_unless(ret == EOK, \"Failed to load file. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|                                          strlen(file_contents[iter]),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|                                          &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|->         fail_unless(ret == EOK, \"Failed to load file. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           ret = ini_config_parse(file_ctx, 1, 0, 0, ini_config);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 194,
                    "column": 33,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |         fail_unless(ret == EOK, \"Failed to parse file. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           ret = ini_config_parse(file_ctx, 1, 0, 0, ini_config);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->         fail_unless(ret == EOK, \"Failed to parse file. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|           sections = ini_get_section_list(ini_config, &sections_count,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 199,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199 |                     \"Failed to get sections. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|                                           &sections_error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|           fail_unless(sections_error == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|->                     \"Failed to get sections. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|                       sections_error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 208,
                    "column": 25,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208 |                         \"Failed to get attributes. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|                                                   &attributes_error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|               fail_unless(attributes_error == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|->                         \"Failed to get attributes. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|                           attributes_error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 215,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |                             \"Failed to get attribute. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|                                                 ini_config, 0, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|                   fail_unless(ret == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->                             \"Failed to get attribute. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|                               ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 220,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |                             \"Failed to get attribute as string. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|                   val_str = ini_get_string_config_value(val, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|                   fail_unless(ret == EOK,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->                             \"Failed to get attribute as string. Error %d.\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                               ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                   fail_unless(val_str != NULL,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 223,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223 |                             \"Failed to get attribute as string: was NULL.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                               ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|                   fail_unless(val_str != NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|->                             \"Failed to get attribute as string: was NULL.\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|                   free(val_str);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_long_value_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 260,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       ret = ini_config_file_from_mem(big_val_cfg, strlen(big_val_cfg),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|                                      &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 263,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|       ret = ini_config_create(&ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|                              ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 266,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266 |     fail_if(ret != 0, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|       ret = ini_config_parse(file_ctx, INI_STOP_ON_ERROR, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|                              ini_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|->     fail_if(ret != 0, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|       ret = ini_get_config_valueobj(\"section\", \"key\", ini_cfg,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 270,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270 |     fail_unless(ret == EOK, \"ini_get_config_valueobj returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|       ret = ini_get_config_valueobj(\"section\", \"key\", ini_cfg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|                                     INI_GET_FIRST_VALUE, &vo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|->     fail_unless(ret == EOK, \"ini_get_config_valueobj returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 274,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274 |     fail_unless(ret == EOK, \"ini_get_int_config_value returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|       value_got = ini_get_string_config_value(vo, &ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|->     fail_unless(ret == EOK, \"ini_get_int_config_value returned %d\\n: %s\", ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_parse_ut_check.c",
                    "line": 277,
                    "column": 48,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277 |     fail_unless(strcmp(value, value_got) == 0, \"Expected and found values differ!\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|->     fail_unless(strcmp(value, value_got) == 0, \"Expected and found values differ!\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|       free(value_got);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       ini_config_destroy(ini_cfg);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'create_rules_from_str'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 52,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52 |     fail_if(file == NULL, \"fopen() failed: %s\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|        * ini_rules_read_from_file, so we create the file here */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|       file = fopen(TEST_RULES_FILE, \"w\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->     fail_if(file == NULL, \"fopen() failed: %s\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|       written = fwrite(rules, 1, strlen(rules), file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|       fail_unless(written == strlen(rules));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 58,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58 |     fail_unless(ret == 0, \"chmod() failed: %s\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       /* allow reading */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|       ret = chmod(TEST_RULES_FILE, 0664);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->     fail_unless(ret == 0, \"chmod() failed: %s\", strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       fclose(file);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 63,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 |     fail_unless(ret == 0, \"read_rules_from_file() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|       ret = ini_rules_read_from_file(TEST_RULES_FILE, _rules_obj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->     fail_unless(ret == 0, \"read_rules_from_file() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_ini_config_from_str'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 74,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74 |     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       ret = ini_config_create(&in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|->     fail_unless(ret == EOK, \"Failed to create config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       ret = ini_config_file_from_mem(input_data, input_data_len, &file_ctx);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 77,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77 |     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       ret = ini_config_file_from_mem(input_data, input_data_len, &file_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|->     fail_unless(ret == EOK, \"Failed to load config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       ret = ini_config_parse(file_ctx, INI_STOP_ON_NONE, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 81,
                    "column": 29,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81 |     fail_unless(ret == EOK, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       ret = ini_config_parse(file_ctx, INI_STOP_ON_NONE, INI_MV1S_ALLOW, 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|                              in_cfg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|->     fail_unless(ret == EOK, \"Failed to parse config. Error %d.\\n\", ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       ini_config_file_destroy(file_ctx);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_errobj_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 98,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 |                 \"ini_errobj_create(NULL) failed with wrong error [%s]\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|       ret = ini_errobj_create(NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|       fail_unless(ret == EINVAL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|->                 \"ini_errobj_create(NULL) failed with wrong error [%s]\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|                   strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 102,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       /* We just created the errobj, it should be empty */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 110,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110 |     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|        * check if the errobj has correct content. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|       ret = ini_errobj_add_msg(errobj, TEST_MSG1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|->     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|       ret = strcmp(TEST_MSG1, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 113,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 |     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|       ret = strcmp(TEST_MSG1, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 118,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118 |     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|       ret = ini_errobj_add_msg(errobj, TEST_MSG2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       ini_errobj_reset(errobj); /* strart from first message */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 122,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122 |     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       ret = strcmp(TEST_MSG1, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|->     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 126,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126 |     fail_if(ret != 0, \"TEST_MSG2 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       ret = strcmp(TEST_MSG2, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|->     fail_if(ret != 0, \"TEST_MSG2 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 131,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 |     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|       ret = ini_errobj_add_msg(errobj, TEST_MSG3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|->     fail_if(ret != 0, \"ini_errobj_add_msg() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|       ini_errobj_reset(errobj); /* strart from first message */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 135,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135 |     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|       ret = strcmp(TEST_MSG1, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|->     fail_if(ret != 0, \"TEST_MSG1 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 139,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139 |     fail_if(ret != 0, \"TEST_MSG2 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|       ret = strcmp(TEST_MSG2, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|->     fail_if(ret != 0, \"TEST_MSG2 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 143,
                    "column": 23,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143 |     fail_if(ret != 0, \"TEST_MSG3 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|       fail_if(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|       ret = strcmp(TEST_MSG3, ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|->     fail_if(ret != 0, \"TEST_MSG3 was not found.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_noerror_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 170,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 173,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_error_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 206,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 209,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|       /* Should generate exactly one error */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 215,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|       ret = strcmp(errmsg, \"[rule/generate_error]: Error\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 226,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 229,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       /* Should generate exactly one error */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 235,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|       ret = strcmp(errmsg, \"Rule 'rule/generate_error' has no validator.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_unknown_validator_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 264,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 267,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|       /* Should generate exactly one error */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_custom_noerror_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 326,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|       /* Pass the custom validator to ini_rules_check() */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 330,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|       /* Pass the custom validator to ini_rules_check() */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|       ret = ini_rules_check(rules_obj, cfg_obj, noerror, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|       /* Should generate no errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 338,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       /* It should be skipped */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|       ret = ini_rules_check(rules_obj, cfg_obj, missing_name, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|       /* Should generate no errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 341,
                    "column": 50,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341 |     fail_unless(ini_errobj_no_more_msgs(errobj), \"%s\", ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|       /* Should generate no errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|->     fail_unless(ini_errobj_no_more_msgs(errobj), \"%s\", ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_custom_error_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 377,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       /* Pass the custom validator to ini_rules_check() */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 381,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       /* Pass the custom validator to ini_rules_check() */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|       ret = ini_rules_check(rules_obj, cfg_obj, error, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|       /* Should generate one error */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 387,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|       ret = strcmp(errmsg, \"[rule/custom_error]: Error\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 394,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|       /* Pass the custom validator to ini_rules_check() */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 405,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|                    \"Rule 'rule/custom_error' uses unknown validator \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|                    \"'custom_error'.\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_options_ok_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 444,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 447,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|       /* Should generate no errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_options_no_section_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 493,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 496,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  496 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  496|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  497|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|       /* Should generate 2 errors (one from rules_check and one",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 503,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 503,
                    "column": 31,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 503,
                    "column": 56,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       %ld",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 508,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|       ret = strcmp(errmsg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|                    \"Rule 'rule/options_for_foo' returned error code '22'\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 515,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|                    \"[rule/options_for_foo]: Validator misses 'section_re' \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|                    \"parameter\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 527,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 530,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|       /* Should generate 2 errors (one from rules_check and one",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 537,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 537,
                    "column": 31,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 537,
                    "column": 56,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       %ld",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 542,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|       ret = strcmp(errmsg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|                    \"Rule 'rule/options_for_foo' returned error code '22'\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 549,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  549 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|                    \"[rule/options_for_foo]: Validator misses 'section_re' \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|                    \"parameter\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  549|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|       fail_unless(ini_errobj_no_more_msgs(errobj));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_options_wrong_regex_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 587,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 590,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  592|       /* Should generate 2 errors (one from rules_check and one",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 597,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 597,
                    "column": 31,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 597,
                    "column": 56,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       %ld",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 602,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|       ret = strcmp(errmsg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|                    \"Rule 'rule/options_for_foo' returned error code '22'\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 625,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|   \t\t     \"Error: 'Unmatched [, [^, [:, [., or [='\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_options_typos_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 664,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  662|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  663|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 667,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|       /* Should generate 4 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 673,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673 |     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 673,
                    "column": 31,
                    "event": "warning[-Wformat=]",
                    "message": "format '%d' expects argument of type 'int', but argument 5 has type 'size_t' {aka 'long unsigned int'}",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673 |     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                            size_t {aka long unsigned int}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 673,
                    "column": 56,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673 |     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       %ld",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_str_ok_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 707,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  707 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  705|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  707|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  708|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  709|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 710,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  710 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  708|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  709|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  710|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  711|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  712|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 714,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  714 |                 \"Unexpected errors found: [%s]\", ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  712|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  713|       fail_unless(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  714|->                 \"Unexpected errors found: [%s]\", ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_str_typos_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 749,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  747|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  748|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 752,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  754|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 756,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756 |             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  754|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  755|       fail_if(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756|->             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758|       fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 758,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756|               \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  759|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  760|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_str_insensitive_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 803,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |                     \"ini_errobj_create() failed for case_insensitive = %s: %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|           ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|           fail_unless(ret == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|->                     \"ini_errobj_create() failed for case_insensitive = %s: %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|                       case_insensitive_values[i], strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 808,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  808 |                     \"ini_rules_check() failed for case_insensitive = %s: %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  806|           ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  807|           fail_unless(ret == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  808|->                     \"ini_rules_check() failed for case_insensitive = %s: %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  809|                       case_insensitive_values[i], strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  810|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 813,
                    "column": 21,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  813 |                     \"Unexpected errors found for case_insensitive = %s: [%s]\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  811|           /* Should generate 0 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  812|           fail_unless(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  813|->                     \"Unexpected errors found for case_insensitive = %s: [%s]\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  814|                       case_insensitive_values[i], ini_errobj_get_msg(errobj));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  815|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_re_ok_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 848,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  848 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  846|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  847|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  848|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  849|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 851,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  849|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 854,
                    "column": 50,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854 |     fail_unless(ini_errobj_no_more_msgs(errobj), \"Unexpected errors found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|->     fail_unless(ini_errobj_no_more_msgs(errobj), \"Unexpected errors found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_re_typos_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 888,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  886|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 891,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 895,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895 |             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  894|       fail_if(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895|->             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897|       fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 897,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895|               \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  898|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  899|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_re_insensitive_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 932,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  932 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  930|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  931|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  932|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 935,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 938,
                    "column": 50,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938 |     fail_unless(ini_errobj_no_more_msgs(errobj), \"Unexpected errors found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|       /* Should generate 0 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->     fail_unless(ini_errobj_no_more_msgs(errobj), \"Unexpected errors found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|       ini_errobj_destroy(&errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_missing_section_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 972,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  970|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  971|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  974|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 975,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  975 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  974|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  975|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  976|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  977|       /* Should generate 1 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 979,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  979 |             \"Expected 1 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  977|       /* Should generate 1 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  978|       fail_if(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  979|->             \"Expected 1 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  980|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  981|       fail_unless(num_err == 1, \"Expected 1 errors, got %d\", num_err);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 981,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  981 |     fail_unless(num_err == 1, \"Expected 1 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  979|               \"Expected 1 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  980|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  981|->     fail_unless(num_err == 1, \"Expected 1 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  982|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 987,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|                    \"[rule/section_list]: No allowed sections specified. \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|                    \"Use 'section = default' to allow only default section\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  988|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  989|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ini_allowed_sections_wrong_regex_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1025,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025 |     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1023|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1024|       ret = ini_errobj_create(&errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025|->     fail_unless(ret == 0, \"ini_errobj_create() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1028,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028 |     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|       ret = ini_rules_check(rules_obj, cfg_obj, NULL, errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|->     fail_unless(ret == 0, \"ini_rules_check() failed: %s\", strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1032,
                    "column": 13,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032 |             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1030|       /* Should generate 2 errors */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1031|       fail_if(ini_errobj_no_more_msgs(errobj),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|->             \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1033|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034|       fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1034,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034 |     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|               \"Expected 2 errors but none found\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1033|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1036|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1039,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1039 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1037|       ret = strcmp(errmsg,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1038|                    \"Rule 'rule/section_list' returned error code '22'\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1039|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 1051,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1051 |     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1049|                        \"[^foo\\\\(*$]:[parentheses not balanced]\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1050|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1051|->     fail_unless(ret == 0, \"Got msg: [%s]\", errmsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1052|       ini_errobj_next(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053|   ",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'vo_show_test'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj_ut.c",
                    "line": 625,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625 |     VOOUT(system(\"cat test.ini\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj_ut.c",
                    "line": 39,
                    "column": 22,
                    "event": "note",
                    "message": "in definition of macro 'VOOUT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 |         if (verbose) foo; \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|   static int vo_show_test(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|->     VOOUT(system(\"cat test.ini\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|       return EOK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_dirname_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 35,
                    "column": 17,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 |                 \"The strings '%s' and '%s' are different, expected same\", \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 53,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'fail_unless_str_equal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53 |     fail_unless_str_equal(p, \"/foo\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   #define fail_unless_str_equal(a, b) do { \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       fail_unless(strcmp(a, b) == 0, \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->                 \"The strings '%s' and '%s' are different, expected same\", \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|                   a, b); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   } while(0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 74,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       /* if pathname does not contain a slash, dirname returns cwd */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       fail_unless(get_dirname(p, PATH_MAX, \"foo\") == SUCCESS);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 118,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|       fail_unless_str_equal(p, \"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       fail_unless(get_basename(p, PATH_MAX, \".\") == SUCCESS);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 178,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       fail_unless_str_equal(base, \"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|       ret = get_directory_and_base_name(dir, PATH_MAX, base, PATH_MAX, \"foo\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 281,
                    "column": 31,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281 |     fail_unless(p2[8] == 'Z', \"Got [%d]\", p2[8]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       fail_unless(path_concat(p2, 8, \"/foo\", \"bar\") == ENOBUFS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|       /* Make sure we don't write past the end of the buffer */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|->     fail_unless(p2[8] == 'Z', \"Got [%d]\", p2[8]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|       /* On ENOBUFS, path should be empty */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|       fail_unless_str_equal(p2, \"\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 299,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|       fail_unless_str_equal(p, \"/foo\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       fail_unless(make_path_absolute(p, PATH_MAX, \"foo\") == SUCCESS);",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_make_path_absolute_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 302,
                    "column": 31,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'/foo' directive output may be truncated writing 4 bytes into a region of size between 1 and 4096",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302 |     snprintf(p2, PATH_MAX, \"%s/foo\", cwd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 5 and 4100 bytes into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       fail_unless(make_path_absolute(p, PATH_MAX, \"foo\") == SUCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|->     snprintf(p2, PATH_MAX, \"%s/foo\", cwd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|       fail_unless_str_equal(p, p2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_make_path_absolute_neg_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 328,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|       /* off-by-one */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|       small_len = strlen(cwd) + strlen(\"foo\") + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|       small2 = malloc(small_len);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_make_normalized_absolute_path_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 351,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|       char cwd[PATH_MAX];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       fail_unless(make_normalized_absolute_path(p, PATH_MAX, \"foo/baz/../bar\") == SUCCESS);",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_make_normalized_absolute_path_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 354,
                    "column": 31,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'/foo/bar' directive output may be truncated writing 8 bytes into a region of size between 1 and 4096",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354 |     snprintf(p2, PATH_MAX, \"%s/foo/bar\", cwd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 9 and 4104 bytes into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|       fail_unless(make_normalized_absolute_path(p, PATH_MAX, \"foo/baz/../bar\") == SUCCESS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|->     snprintf(p2, PATH_MAX, \"%s/foo/bar\", cwd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|       fail_unless_str_equal(p, p2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 567,
                    "column": 44,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567 |     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|       /* if pathname does not contain a slash, the parent is cwd */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|->     fail_if(getcwd(cwd, PATH_MAX) == NULL, \"getcwd failed\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|       fail_unless(find_existing_directory_ancestor(p, PATH_MAX, \"foo/bar\") == SUCCESS);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'setup_directory_list'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 589,
                    "column": 28,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589 |     fail_unless(s != NULL, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|       s = strdup(DIR_TEMPLATE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|->     fail_unless(s != NULL, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|       if (!s) return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|       dlist_dir = mkdtemp(s);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 592,
                    "column": 36,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  592 |     fail_unless(dlist_dir != NULL, \"mkstemp failed [%d][%s]\", errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|       if (!s) return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|       dlist_dir = mkdtemp(s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  592|->     fail_unless(dlist_dir != NULL, \"mkstemp failed [%d][%s]\", errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  593|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594|       ret = asprintf(&dlist_subdir, \"%s/%s\", dlist_dir, SUBDIR);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 595,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |     fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  593|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594|       ret = asprintf(&dlist_subdir, \"%s/%s\", dlist_dir, SUBDIR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|->     fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       ret = mkdir(dlist_subdir, 0700);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|       fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subdir, errno, strerror(errno));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 597,
                    "column": 28,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|       fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       ret = mkdir(dlist_subdir, 0700);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|->     fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|       ret = asprintf(&dlist_subsubdir, \"%s/%s\", dlist_subdir, SUBSUBDIR);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 600,
                    "column": 27,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600 |     fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|       ret = asprintf(&dlist_subsubdir, \"%s/%s\", dlist_subdir, SUBSUBDIR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|->     fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|       ret = mkdir(dlist_subsubdir, 0700);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|       fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subsubdir, errno, strerror(errno));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 602,
                    "column": 28,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602 |     fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subsubdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|       fail_unless(ret != 1, \"strdup failed\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|       ret = mkdir(dlist_subsubdir, 0700);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|->     fail_unless(ret != -1, \"mkdir %s failed [%d][%s]\", dlist_subsubdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'teardown_directory_list'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 611,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611 |         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_subsubdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|       if (dlist_subsubdir) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|           ret = rmdir(dlist_subsubdir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|->         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_subsubdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|           free(dlist_subsubdir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|           dlist_subsubdir = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 618,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618 |         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_subdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|       if (dlist_subdir) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|           ret = rmdir(dlist_subdir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|->         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_subdir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|           free(dlist_subdir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|           dlist_subdir = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 685,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils_ut.c",
                    "line": 625,
                    "column": 32,
                    "event": "warning[-Wformat-extra-args]",
                    "message": "too many arguments for format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625 |         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_dir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|       if (dlist_dir) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|           ret = rmdir(dlist_dir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|->         fail_unless(ret != -1, \"unlink %s failed [%d][%s]\", dlist_dir, errno, strerror(errno));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|           free(dlist_dir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|           dlist_dir = NULL;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
