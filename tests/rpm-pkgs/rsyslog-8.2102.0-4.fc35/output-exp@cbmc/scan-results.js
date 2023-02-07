{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "rsyslog-8.2102.0-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/cbmc/output",
        "time-created": "2023-01-27 16:00:19",
        "time-finished": "2023-01-27 16:23:21",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/rsyslog-8.2102.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "rsyslog-8.2102.0/action.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'actionSuspend'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/action.c",
                    "line": 808,
                    "column": 1,
                    "event": "warning",
                    "message": "function '__sync_fetch_and_add_U64' in module '' is shadowed by a definition in module ''",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  806|   \tpThis->ctrSuspendDuration += suspendDuration;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  807|   \tif(getActionNbrResRtry(pWti, pThis) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  808|-> \t\tSTATSCOUNTER_INC(pThis->ctrSuspend, pThis->mutCtrSuspend);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  809|   \t}",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "rsyslog-8.2102.0/contrib/fmhash/fmhash.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/fmhash/fmhash.c",
                    "line": 380,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
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
                    "message": "  379|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/fmhash/fmhash.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/fmhash/fmhash.c",
                    "line": 382,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   \tdbgprintf(\"rsyslog fmhash init called, compiled with version %s\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/contrib/imdocker/imdocker.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/imdocker/imdocker.c",
                    "line": 1777,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1775|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1776|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1777|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1778|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1779|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/imdocker/imdocker.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/imdocker/imdocker.c",
                    "line": 1779,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1777|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1778|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1779|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1780|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1781|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/improg/improg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/improg/improg.c",
                    "line": 716,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  714|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/improg/improg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/improg/improg.c",
                    "line": 718,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|   \tCHKiRet(objUse(ruleset, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  720|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/mmcount/mmcount.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/mmcount/mmcount.c",
                    "line": 347,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/mmcount/mmcount.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/mmcount/mmcount.c",
                    "line": 349,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|   \tDBGPRINTF(\"mmcount: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/contrib/mmkubernetes/mmkubernetes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/mmkubernetes/mmkubernetes.c",
                    "line": 2068,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2066|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2067|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2068|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2069|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2070|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/mmkubernetes/mmkubernetes.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/mmkubernetes/mmkubernetes.c",
                    "line": 2070,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2068|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2069|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2070|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2071|   \tDBGPRINTF(\"mmkubernetes: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2072|   \tCHKiRet(objUse(statsobj, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 384,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
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
                    "message": "  383|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 388,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|   \t\t\t\t\t\tinterface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|   \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|   \tDBGPRINTF(\"omamqp1: module compiled with rsyslog version %s.\\n\", VERSION);",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omamqp1/omamqp1.c",
                    "line": 389,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|   \t\t\t\t\t\tinterface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|   \tDBGPRINTF(\"omamqp1: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|   \tDBGPRINTF(\"omamqp1: %susing transactional output interface.\\n\", bCoreSupportsBatching ? \"\" : \"not \");",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 450,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   /* note we do not support rsyslog v5 syntax */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* only supports rsyslog 6 configs */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 452,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* only supports rsyslog 6 configs */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|   \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|   \tif (!bCoreSupportsBatching) {",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omhiredis/omhiredis.c",
                    "line": 453,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* only supports rsyslog 6 configs */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|   \tif (!bCoreSupportsBatching) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|   \t\tLogError(0, NO_ERRCODE, \"omhiredis: rsyslog core does not support batching - abort\");",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omhttp/omhttp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omhttp/omhttp.c",
                    "line": 2129,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2127|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2128|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2129|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2130|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2131|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omhttp/omhttp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omhttp/omhttp.c",
                    "line": 2131,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2129|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2130|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2131|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2132|   \tCHKiRet(objUse(prop, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2133|   \tCHKiRet(objUse(ruleset, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omrabbitmq/omrabbitmq.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omrabbitmq/omrabbitmq.c",
                    "line": 1287,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1285|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1286|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1287|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1288|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1289|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/omrabbitmq/omrabbitmq.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/omrabbitmq/omrabbitmq.c",
                    "line": 1289,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1287|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1288|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1289|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1290|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1291|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmaixforwardedfrom/pmaixforwardedfrom.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmaixforwardedfrom/pmaixforwardedfrom.c",
                    "line": 169,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmaixforwardedfrom/pmaixforwardedfrom.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmaixforwardedfrom/pmaixforwardedfrom.c",
                    "line": 171,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmcisconames/pmcisconames.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmcisconames/pmcisconames.c",
                    "line": 169,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmcisconames/pmcisconames.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmcisconames/pmcisconames.c",
                    "line": 171,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmsnare/pmsnare.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmsnare/pmsnare.c",
                    "line": 430,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/contrib/pmsnare/pmsnare.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/contrib/pmsnare/pmsnare.c",
                    "line": 432,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/fmhttp/fmhttp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/fmhttp/fmhttp.c",
                    "line": 184,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/fmhttp/fmhttp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/fmhttp/fmhttp.c",
                    "line": 186,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|   \tdbgprintf(\"rsyslog fmhttp init called, compiled with version %s\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imfile/imfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imfile/imfile.c",
                    "line": 2870,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2868|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2869|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2870|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2871|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2872|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imfile/imfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imfile/imfile.c",
                    "line": 2872,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2870|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2871|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2872|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2873|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2874|   \tCHKiRet(objUse(strm, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imgssapi/imgssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imgssapi/imgssapi.c",
                    "line": 787,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current definition */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imgssapi/imgssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imgssapi/imgssapi.c",
                    "line": 789,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current definition */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   \tpOurTcpsrv = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|   \t/* request objects we use */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imjournal/imjournal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imjournal/imjournal.c",
                    "line": 1083,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imjournal/imjournal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imjournal/imjournal.c",
                    "line": 1085,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1083|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1084|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1085|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1086|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imkafka/imkafka.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imkafka/imkafka.c",
                    "line": 850,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  848|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  849|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imkafka/imkafka.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imkafka/imkafka.c",
                    "line": 852,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  850|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|   \t/* request objects we use */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imklog/imklog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imklog/imklog.c",
                    "line": 510,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imklog/imklog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imklog/imklog.c",
                    "line": 512,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/immark/immark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/immark/immark.c",
                    "line": 320,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/immark/immark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/immark/immark.c",
                    "line": 322,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|   \tCHKiRet(objUse(prop, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/impstats/impstats.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/impstats/impstats.c",
                    "line": 605,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/impstats/impstats.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/impstats/impstats.c",
                    "line": 607,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \tDBGPRINTF(\"impstats version %s loading\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   \tinitConfigSettings();",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imptcp/imptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imptcp/imptcp.c",
                    "line": 2591,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2589|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2590|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2591|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2592|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2593|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imptcp/imptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imptcp/imptcp.c",
                    "line": 2593,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2591|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2592|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2593|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2594|   \t/* request objects we use */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2595|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imrelp/imrelp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imrelp/imrelp.c",
                    "line": 925,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  923|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  924|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  925|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  927|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imrelp/imrelp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imrelp/imrelp.c",
                    "line": 927,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  925|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  927|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  928|   \tpRelpEngine = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  929|   \t/* request objects we use */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imtcp/imtcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imtcp/imtcp.c",
                    "line": 814,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  812|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  813|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  814|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  815|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  816|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imtcp/imtcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imtcp/imtcp.c",
                    "line": 816,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  814|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  815|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  816|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  817|   \tpOurTcpsrv = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818|   \t/* request objects we use */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imudp/imudp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imudp/imudp.c",
                    "line": 1365,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imudp/imudp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imudp/imudp.c",
                    "line": 1367,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \tCHKiRet(objUse(statsobj, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imuxsock/imuxsock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imuxsock/imuxsock.c",
                    "line": 1669,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1667|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1668|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1669|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1670|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1671|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/imuxsock/imuxsock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/imuxsock/imuxsock.c",
                    "line": 1671,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1669|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1670|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1671|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1672|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1673|   \tCHKiRet(objUse(net, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmanon/mmanon.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmanon/mmanon.c",
                    "line": 1351,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1349|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1350|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1351|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1352|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1353|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmanon/mmanon.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmanon/mmanon.c",
                    "line": 1353,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1351|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1352|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1353|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1354|   \tDBGPRINTF(\"mmanon: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1355|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 317,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|   \tint bMsgPassingSupported;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 321,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   \t\t/* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   \t/* check if the rsyslog core supports parameter passing code */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|   \tbMsgPassingSupported = 0;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmaudit/mmaudit.c",
                    "line": 325,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|   \tbMsgPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|   \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|-> \t\t\t&pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|   \t\t/* found entry point, so let's see if core supports msg passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 605,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 608,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmexternal/mmexternal.c",
                    "line": 609,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 373,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|   \tint bMsgPassingSupported;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|   \t\t/* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 376,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|   \t\t/* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   \tDBGPRINTF(\"mmjsonparse: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t/* check if the rsyslog core supports parameter passing code */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmjsonparse/mmjsonparse.c",
                    "line": 381,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|   \tbMsgPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|-> \t\t\t&pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   \t\t/* found entry point, so let's see if core supports msg passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 515,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|   \tint bMsgPassingSupported;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 519,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518|   \t\t/* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|   \tDBGPRINTF(\"mmnormalize: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|   \t/* check if the rsyslog core supports parameter passing code */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmnormalize/mmnormalize.c",
                    "line": 524,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|   \tbMsgPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|-> \t\t\t&pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|   \t\t/* found entry point, so let's see if core supports msg passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 400,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|   \tint bMsgPassingSupported;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 404,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   \t\t/* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|   \t/* check if the rsyslog core supports parameter passing code */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|   \tbMsgPassingSupported = 0;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmsnmptrapd/mmsnmptrapd.c",
                    "line": 408,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|   \tbMsgPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|   \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|-> \t\t\t&pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|   \t\t/* found entry point, so let's see if core supports msg passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmutf8fix/mmutf8fix.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmutf8fix/mmutf8fix.c",
                    "line": 335,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/mmutf8fix/mmutf8fix.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/mmutf8fix/mmutf8fix.c",
                    "line": 337,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   \tDBGPRINTF(\"mmutf8fix: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omclickhouse/omclickhouse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omclickhouse/omclickhouse.c",
                    "line": 994,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  992|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  993|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  994|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omclickhouse/omclickhouse.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omclickhouse/omclickhouse.c",
                    "line": 996,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  994|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|   \tCHKiRet(objUse(statsobj, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|   \tCHKiRet(objUse(prop, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omelasticsearch/omelasticsearch.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omelasticsearch/omelasticsearch.c",
                    "line": 2201,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2199|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2200|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2201|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2202|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2203|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omelasticsearch/omelasticsearch.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omelasticsearch/omelasticsearch.c",
                    "line": 2203,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2201|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2202|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2203|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2204|   \tCHKiRet(objUse(statsobj, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2205|   \tCHKiRet(objUse(prop, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omgssapi/omgssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omgssapi/omgssapi.c",
                    "line": 700,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  699|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  700|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  701|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  702|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omgssapi/omgssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omgssapi/omgssapi.c",
                    "line": 702,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  700|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  701|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  702|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  703|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  704|   \tCHKiRet(objUse(gssutil, LM_GSSUTIL_FILENAME));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omjournal/omjournal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omjournal/omjournal.c",
                    "line": 319,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omjournal/omjournal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omjournal/omjournal.c",
                    "line": 321,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   \tDBGPRINTF(\"omjournal: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omkafka/omkafka.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omkafka/omkafka.c",
                    "line": 2000,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1998|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1999|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2000|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2001|   \tuchar *pTmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2002|   INITLegCnfVars",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omkafka/omkafka.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omkafka/omkafka.c",
                    "line": 2004,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2002|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2003|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2004|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2005|   \tdbgprintf(\"just because librdkafka needs it, sqrt of 4 is %f\\n\", sqrt(4.0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2006|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omlibdbi/omlibdbi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omlibdbi/omlibdbi.c",
                    "line": 635,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  633|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  634|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omlibdbi/omlibdbi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omlibdbi/omlibdbi.c",
                    "line": 638,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  638|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  639|   #\tifndef HAVE_DBI_TXSUPP",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  640|   \tDBGPRINTF(\"omlibdbi: no transaction support in libdbi\\n\");",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommail/ommail.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommail/ommail.c",
                    "line": 878,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  876|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  877|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  878|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  879|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  880|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommail/ommail.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommail/ommail.c",
                    "line": 881,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  879|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  880|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  881|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  882|   \t/* tell which objects we need */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  883|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 742,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  741|   \tint bJSONPassingSupported;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  743|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 744,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  743|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  745|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  746|   \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 746,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  745|   \tCHKiRet(objUse(datetime, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  746|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  747|   \tDBGPRINTF(\"ommongodb: module compiled with rsyslog version %s.\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  748|   ",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommongodb/ommongodb.c",
                    "line": 752,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \tbJSONPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|   \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|-> \t\t\t\t    &pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  754|   \t\t/* found entry point, so let's see if core supports msg passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 536,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 539,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|   \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|   \tif(!bCoreSupportsBatching) {",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ommysql/ommysql.c",
                    "line": 540,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|   \tif(!bCoreSupportsBatching) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542|   \t\tLogError(0, NO_ERRCODE, \"ommysql: rsyslog core too old\");",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 532,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 535,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|   \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   \tif (!bCoreSupportsBatching) {",
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
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/ompgsql/ompgsql.c",
                    "line": 536,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|   CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   \tif (!bCoreSupportsBatching) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   \t\tLogError(0, NO_ERRCODE, \"ompgsql: rsyslog core too old\");",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 1264,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1262|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 1267,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1268|   \t/* tell engine which objects we need */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1269|   ",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 1271,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1269|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1270|   \t/* check that rsyslog core supports transactional plugins */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1271|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1272|   \tif (!bCoreSupportsBatching) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1273|   \t\tLogError(0, NO_ERRCODE, \"omprog: rsyslog core too old (does not support batching)\");",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omprog/omprog.c",
                    "line": 1281,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1279|   \tCHKiRet(omsdRegCFSLineHdlr((uchar *)\"resetconfigvariables\", 1, eCmdHdlrCustomHandler, resetConfigVariables,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1280|   \t\tNULL, STD_LOADABLE_MODULE_ID));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1281|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omrelp/omrelp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omrelp/omrelp.c",
                    "line": 819,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  817|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  819|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  821|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omrelp/omrelp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omrelp/omrelp.c",
                    "line": 822,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  821|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  822|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  823|   \t/* tell which objects we need */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  824|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omsnmp/omsnmp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omsnmp/omsnmp.c",
                    "line": 624,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|   \tuchar *pTmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omsnmp/omsnmp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omsnmp/omsnmp.c",
                    "line": 627,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|   \tuchar *pTmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  626|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|   \tinitConfVars();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|   ",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 343,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|   \tunsigned long opts;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \tint bArrayPassingSupported;\t\t/* does core support template passing as an array? */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 346,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   \t/* check if the rsyslog core supports parameter passing code */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|   \tbArrayPassingSupported = 0;",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omstdout/omstdout.c",
                    "line": 349,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(unsigned long int *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   \t/* check if the rsyslog core supports parameter passing code */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|   \tbArrayPassingSupported = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|-> \tlocalRet = pHostQueryEtryPt((uchar*)\"OMSRgetSupportedTplOpts\", &pomsrGetSupportedTplOpts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|   \t\t/* found entry point, so let's see if core supports array passing */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omtesting/omtesting.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omtesting/omtesting.c",
                    "line": 353,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omtesting/omtesting.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omtesting/omtesting.c",
                    "line": 356,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|   \tCHKiRet(omsdRegCFSLineHdlr((uchar *)\"actionomtestingechostdout\", 0, eCmdHdlrBinary, NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   \t\t\t\t   &cs.bEchoStdout, STD_LOADABLE_MODULE_ID));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omudpspoof/omudpspoof.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omudpspoof/omudpspoof.c",
                    "line": 793,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omudpspoof/omudpspoof.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omudpspoof/omudpspoof.c",
                    "line": 796,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  798|   \tCHKiRet(objUse(net,LM_NET_FILENAME));",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omuxsock/omuxsock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omuxsock/omuxsock.c",
                    "line": 440,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/plugins/omuxsock/omuxsock.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/omuxsock/omuxsock.c",
                    "line": 443,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|   ",
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
                    "file_name": "rsyslog-8.2102.0/plugins/pmlastmsg/pmlastmsg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/pmlastmsg/pmlastmsg.c",
                    "line": 153,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/plugins/pmlastmsg/pmlastmsg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/plugins/pmlastmsg/pmlastmsg.c",
                    "line": 155,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/gss-misc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/gss-misc.c",
                    "line": 310,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/lmcry_gcry.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/lmcry_gcry.c",
                    "line": 335,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|   \t/* Initialize all classes that are in our module - this includes ourselfs */",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 588,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, rsRetVal (**)())' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|   \t}",
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
                    "message": "  588|-> \tCHKiRet((*modInit)(CURR_MOD_IF_VERSION, &pNew->iIFVers, &pNew->modQueryEtryPt, queryHostEtryPt, pNew));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   \tif(pNew->iIFVers != CURR_MOD_IF_VERSION) {",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 597,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(eModType_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|   \t * can never change in the lifetime of an module. -- rgerhards, 2007-12-14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|-> \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"getType\", &modGetType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   \tCHKiRet((*modGetType)(&pNew->eType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"getKeepType\", &modGetKeepType));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 599,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(eModKeepType_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"getType\", &modGetType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   \tCHKiRet((*modGetType)(&pNew->eType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|-> \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"getKeepType\", &modGetKeepType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|   \tCHKiRet((*modGetKeepType)(&pNew->eKeepType));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|   \tdbgprintf(\"module %s of type %d being loaded (keepType=%d).\\n\", name, pNew->eType, pNew->eKeepType);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 607,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   \t * module types.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|-> \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modGetID\", &pNew->modGetID));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modExit\", &pNew->modExit));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"isCompatibleWithFeature\", &pNew->isCompatibleWithFeature);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 608,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modGetID\", &pNew->modGetID));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|-> \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modExit\", &pNew->modExit));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"isCompatibleWithFeature\", &pNew->isCompatibleWithFeature);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   \tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 609,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(syslogFeature)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modGetID\", &pNew->modGetID));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"modExit\", &pNew->modExit));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|-> \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"isCompatibleWithFeature\", &pNew->isCompatibleWithFeature);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   \tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|   \t\tpNew->isCompatibleWithFeature = dummyIsCompatibleWithFeature;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 614,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(struct nvlst *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|   \telse if(localRet != RS_RET_OK)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|   \t\tABORT_FINALIZE(localRet);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|-> \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"setModCnf\", &pNew->setModCnf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|   \tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|   \t\tpNew->setModCnf = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 621,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|   \t/* optional calls for new config system */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|-> \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"getModCnfName\", &getModCnfName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|   \t\tif(getModCnfName(&cnfName) == RS_RET_OK)",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 630,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *, rsconf_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|   \t\tdbgprintf(\"module config name is '%s'\\n\", cnfName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|-> \tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"beginCnfLoad\", &pNew->beginCnfLoad);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|   \t\tdbgprintf(\"module %s supports rsyslog v6 config interface\\n\", name);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 633,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|   \tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|   \t\tdbgprintf(\"module %s supports rsyslog v6 config interface\\n\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  633|-> \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"endCnfLoad\", &pNew->endCnfLoad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  634|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeCnf\", &pNew->freeCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"checkCnf\", &pNew->checkCnf));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 634,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|   \t\tdbgprintf(\"module %s supports rsyslog v6 config interface\\n\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  633|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"endCnfLoad\", &pNew->endCnfLoad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  634|-> \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeCnf\", &pNew->freeCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"checkCnf\", &pNew->checkCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"activateCnf\", &pNew->activateCnf));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 635,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  633|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"endCnfLoad\", &pNew->endCnfLoad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  634|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeCnf\", &pNew->freeCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|-> \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"checkCnf\", &pNew->checkCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"activateCnf\", &pNew->activateCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|   \t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"activateCnfPrePrivDrop\", &pNew->activateCnfPrePrivDrop);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 636,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  634|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeCnf\", &pNew->freeCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"checkCnf\", &pNew->checkCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|-> \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"activateCnf\", &pNew->activateCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|   \t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"activateCnfPrePrivDrop\", &pNew->activateCnfPrePrivDrop);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  638|   \t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 637,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"checkCnf\", &pNew->checkCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   \t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"activateCnf\", &pNew->activateCnf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|-> \t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"activateCnfPrePrivDrop\", &pNew->activateCnfPrePrivDrop);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  638|   \t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  639|   \t\t\tpNew->activateCnfPrePrivDrop = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 651,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(thrdInfo_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|   \tswitch(pNew->eType) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|   \t\tcase eMOD_IN:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"runInput\", &pNew->mod.im.runInput));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"willRun\", &pNew->mod.im.willRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"afterRun\", &pNew->mod.im.afterRun));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 652,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|   \t\tcase eMOD_IN:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"runInput\", &pNew->mod.im.runInput));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"willRun\", &pNew->mod.im.willRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"afterRun\", &pNew->mod.im.afterRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|   \t\t\tpNew->mod.im.bCanRun = 0;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 653,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(thrdInfo_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"runInput\", &pNew->mod.im.runInput));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"willRun\", &pNew->mod.im.willRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"afterRun\", &pNew->mod.im.afterRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|   \t\t\tpNew->mod.im.bCanRun = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"newInpInst\", &pNew->mod.im.newInpInst);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 655,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(struct nvlst *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"afterRun\", &pNew->mod.im.afterRun));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|   \t\t\tpNew->mod.im.bCanRun = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"newInpInst\", &pNew->mod.im.newInpInst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|   \t\t\t\tpNew->mod.im.newInpInst = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 661,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  659|   \t\t\t\tABORT_FINALIZE(localRet);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  660|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  661|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"doHUP\", &pNew->doHUP);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  662|   \t\t\tif(localRet != RS_RET_OK && localRet != RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  663|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 667,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|   \t\t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|   \t\tcase eMOD_OUT:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeInstance\", &pNew->freeInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"dbgPrintInstInfo\", &pNew->dbgPrintInstInfo));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parseSelectorAct\", &pNew->mod.om.parseSelectorAct));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 668,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|   \t\tcase eMOD_OUT:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeInstance\", &pNew->freeInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"dbgPrintInstInfo\", &pNew->dbgPrintInstInfo));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parseSelectorAct\", &pNew->mod.om.parseSelectorAct));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"tryResume\", &pNew->tryResume));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 669,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar **, void **, omodStringRequest_t **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeInstance\", &pNew->freeInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"dbgPrintInstInfo\", &pNew->dbgPrintInstInfo));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parseSelectorAct\", &pNew->mod.om.parseSelectorAct));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"tryResume\", &pNew->tryResume));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"createWrkrInstance\",",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 670,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"dbgPrintInstInfo\", &pNew->dbgPrintInstInfo));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parseSelectorAct\", &pNew->mod.om.parseSelectorAct));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"tryResume\", &pNew->tryResume));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"createWrkrInstance\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|   \t\t\t\t&pNew->mod.om.createWrkrInstance));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 671,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parseSelectorAct\", &pNew->mod.om.parseSelectorAct));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"tryResume\", &pNew->tryResume));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"createWrkrInstance\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|   \t\t\t\t&pNew->mod.om.createWrkrInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeWrkrInstance\",",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 673,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"createWrkrInstance\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|   \t\t\t\t&pNew->mod.om.createWrkrInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeWrkrInstance\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|   \t\t\t\t&pNew->mod.om.freeWrkrInstance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 677,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   \t\t\t/* try load optional interfaces */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"doHUP\", &pNew->doHUP);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   \t\t\tif(localRet != RS_RET_OK && localRet != RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 681,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "message": "  681|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"doHUPWrkr\", &pNew->doHUPWrkr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  682|   \t\t\tif(localRet != RS_RET_OK && localRet != RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  683|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 686,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  684|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  685|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"SetShutdownImmdtPtr\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  686|-> \t\t\t\t&pNew->mod.om.SetShutdownImmdtPtr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  687|   \t\t\tif(localRet != RS_RET_OK && localRet != RS_RET_MODULE_ENTRY_POINT_NOT_FOUND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 691,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|   \t\t\tpNew->mod.om.supportsTX = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"beginTransaction\", &pNew->mod.om.beginTransaction);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|   \t\t\t\tpNew->mod.om.beginTransaction = dummyBeginTransaction;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 700,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void **, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  699|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"doAction\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  700|-> \t\t\t\t   &pNew->mod.om.doAction);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  701|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  702|   \t\t\t\tpNew->mod.om.doAction = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 708,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *, actWrkrIParams_t *, const unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  707|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"commitTransaction\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  708|-> \t\t\t\t   &pNew->mod.om.commitTransaction);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  709|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  710|   \t\t\t\tpNew->mod.om.commitTransaction = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 742,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  741|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"endTransaction\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|-> \t\t\t\t   &pNew->mod.om.endTransaction);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  743|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|   \t\t\t\tpNew->mod.om.endTransaction = dummyEndTransaction;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 749,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, struct nvlst *, void **, omodStringRequest_t **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  747|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  748|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|-> \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"newActInst\", &pNew->mod.om.newActInst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \t\t\tif(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|   \t\t\t\tpNew->mod.om.newActInst = dummynewActInst;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 760,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(instanceConf_t *, smsg_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758|   \t\tcase eMOD_PARSER:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  759|   \t\t\tlocalRet = (*pNew->modQueryEtryPt)((uchar*)\"parse2\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  760|-> \t\t\t\t   &pNew->mod.pm.parse2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  761|   \t\t\tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762|   \t\t\t\tpNew->mod.pm.parse = NULL;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 763,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(struct nvlst *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  761|   \t\t\tif(localRet == RS_RET_OK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762|   \t\t\t\tpNew->mod.pm.parse = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|-> \t\t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"newParserInst\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|   \t\t\t\t\t&pNew->mod.pm.newParserInst));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   \t\t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeParserInst\",",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 765,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|   \t\t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"newParserInst\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|   \t\t\t\t\t&pNew->mod.pm.newParserInst));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|-> \t\t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"freeParserInst\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|   \t\t\t\t\t&pNew->mod.pm.freeParserInst));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   \t\t\t} else if(localRet == RS_RET_MODULE_ENTRY_POINT_NOT_FOUND) {",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 771,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(smsg_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|   \t\t\t\tpNew->mod.pm.newParserInst = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  770|   \t\t\t\tpNew->mod.pm.freeParserInst = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771|-> \t\t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"parse\", &pNew->mod.pm.parse));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  772|   \t\t\t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|   \t\t\t\tABORT_FINALIZE(localRet);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 775,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|   \t\t\t\tABORT_FINALIZE(localRet);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"GetParserName\", &GetName));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|   \t\t\tCHKiRet(GetName(&pName));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|   \t\t\tCHKiRet(parserConstructViaModAndName(pNew, pName, NULL));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 786,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(const smsg_t *, actWrkrIParams_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  784|   \t\t\t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   \t\t\tCHKiRet(objUse(strgen, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"strgen\", &pNew->mod.sm.strgen));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"GetName\", &GetName));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \t\t\tCHKiRet(GetName(&pName));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 787,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   \t\t\tCHKiRet(objUse(strgen, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"strgen\", &pNew->mod.sm.strgen));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"GetName\", &GetName));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \t\t\tCHKiRet(GetName(&pName));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|   \t\t\tCHKiRet(strgen.Construct(&pStrgen));",
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
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'doModInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/modules.c",
                    "line": 795,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, struct scriptFunct **)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   \t\t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|   \t\tcase eMOD_FUNCTION:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|-> \t\t\tCHKiRet((*pNew->modQueryEtryPt)((uchar*)\"getFunctArray\", &pNew->mod.fm.getFunctArray));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|   \t\t\tint version;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|   \t\t\tstruct scriptFunct *functArray;",
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
                    "file_name": "rsyslog-8.2102.0/runtime/net.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/net.c",
                    "line": 1740,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1738|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1739|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/netstrms.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/netstrms.c",
                    "line": 455,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_gtls.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_gtls.c",
                    "line": 2284,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2282|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2283|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2284|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2285|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2286|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'SetTlsVerifyDepth'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 191,
                    "column": 21,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'pThis'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |         nsd_ptcp_t *pThis = (nsd_ptcp_t*) pNsd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   SetTlsVerifyDepth(nsd_t __attribute__((unused)) *pNsd, int verifyDepth)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|-> \tnsd_ptcp_t *pThis = (nsd_ptcp_t*) pNsd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   \tDEFiRet;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \tISOBJ_TYPE_assert((pThis), nsd_ptcp);",
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
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 1073,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1071|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1072|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1073|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1074|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1075|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/regexp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/regexp.c",
                    "line": 377,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
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
                    "message": "  376|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/tcpclt.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/tcpclt.c",
                    "line": 515,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|   ",
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
                    "file_name": "rsyslog-8.2102.0/runtime/tcpsrv.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/tcpsrv.c",
                    "line": 1725,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1723|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1724|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1725|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1727|   \t/* we just init the worker mutex, but do not start the workers themselves. This is deferred",
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
                    "file_name": "rsyslog-8.2102.0/runtime/zlibw.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/zlibw.c",
                    "line": 117,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   BEGINmodInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   ",
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
                    "file_name": "rsyslog-8.2102.0/tools/iminternal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'iminternalAddMsg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/iminternal.c",
                    "line": 108,
                    "column": 1,
                    "event": "warning",
                    "message": "function '__sync_fetch_and_and_S32' in module '' is shadowed by a definition in module ''",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   \tCHKiRet(llAppend(&llMsgs,  NULL, (void*) pThis));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|-> \tif(PREFER_FETCH_32BIT(bHaveMainQueue)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   \t\tDBGPRINTF(\"signaling new internal message via SIGTTOU: '%s'\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   \t\t\tpThis->pMsg->pszRawMsg);",
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
                    "file_name": "rsyslog-8.2102.0/tools/omdiscard.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitDiscard'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omdiscard.c",
                    "line": 152,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   BEGINmodInit(Discard)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/omdiscard.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitDiscard'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omdiscard.c",
                    "line": 154,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   ENDmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|   /*",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'getClockFileAccess'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 109,
                    "column": 1,
                    "event": "warning",
                    "message": "function '__sync_fetch_and_add_U64' in module '' is shadowed by a definition in module ''",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   #ifdef HAVE_ATOMIC_BUILTINS64",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|-> \treturn ATOMIC_INC_AND_FETCH_uint64(&clockFileAccess, &mutClock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   \treturn ATOMIC_INC_AND_FETCH_unsigned(&clockFileAccess, &mutClock);",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 1549,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1547|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1548|   BEGINmodInit(File)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1549|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1550|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1551|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 1551,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1549|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1550|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1551|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1552|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1553|   \tCHKiRet(objUse(strm, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfile.c",
                    "line": 1558,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(signed int *, unsigned int)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1556|   \tINIT_ATOMIC_HELPER_MUT(mutClock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1557|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1558|-> \tINITChkCoreFeature(bCoreSupportsBatching, CORE_FEATURE_BATCHING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1559|   \tDBGPRINTF(\"omfile: %susing transactional output interface.\\n\", bCoreSupportsBatching ? \"\" : \"not \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1560|   \tCHKiRet(omsdRegCFSLineHdlr((uchar *)\"dynafilecachesize\", 0, eCmdHdlrInt, setDynaFileCacheSize,",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitFwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfwd.c",
                    "line": 1716,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1714|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1715|   BEGINmodInit(Fwd)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1716|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1717|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1718|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/tools/omfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitFwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omfwd.c",
                    "line": 1719,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1717|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1718|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1719|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1720|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1721|   \tCHKiRet(objUse(net,LM_NET_FILENAME));",
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
                    "file_name": "rsyslog-8.2102.0/tools/ompipe.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitPipe'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/ompipe.c",
                    "line": 442,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|   BEGINmodInit(Pipe)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/tools/ompipe.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitPipe'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/ompipe.c",
                    "line": 445,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|   ENDmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|   /* vi:set ai:",
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
                    "file_name": "rsyslog-8.2102.0/tools/omshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitShell'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omshell.c",
                    "line": 156,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   BEGINmodInit(Shell)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/omshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitShell'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omshell.c",
                    "line": 158,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   ENDmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|   ",
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
                    "file_name": "rsyslog-8.2102.0/tools/omusrmsg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitUsrMsg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omusrmsg.c",
                    "line": 468,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|   BEGINmodInit(UsrMsg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/tools/omusrmsg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitUsrMsg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/omusrmsg.c",
                    "line": 471,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|   INITLegCnfVars",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|   ENDmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|   ",
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
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc3164.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitpmrfc3164'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc3164.c",
                    "line": 402,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|   BEGINmodInit(pmrfc3164)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|   \t/* we only support the current interface specification */",
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
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc3164.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitpmrfc3164'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc3164.c",
                    "line": 405,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|   \t/* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  406|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc5424.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitpmrfc5424'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc5424.c",
                    "line": 317,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|   BEGINmodInit(pmrfc5424)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc5424.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitpmrfc5424'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/pmrfc5424.c",
                    "line": 319,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   \tCHKiRet(objUse(glbl, CORE_COMPONENT));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \tCHKiRet(objUse(parser, CORE_COMPONENT));",
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
                    "file_name": "rsyslog-8.2102.0/tools/smfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smfile.c",
                    "line": 132,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   BEGINmodInit(smfile)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/smfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smfile.c",
                    "line": 134,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   \tdbgprintf(\"rsyslog standard file format strgen init called, compiled with version %s\\n\", VERSION);",
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
                    "file_name": "rsyslog-8.2102.0/tools/smfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmfwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smfwd.c",
                    "line": 139,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   BEGINmodInit(smfwd)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/smfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmfwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smfwd.c",
                    "line": 141,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|-> CODEmodInit_QueryRegCFSLineHdlr",
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
                    "message": "  143|   \tdbgprintf(\"rsyslog standard (network) forward format strgen init called, compiled with version\"",
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
                    "file_name": "rsyslog-8.2102.0/tools/smtradfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmtradfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smtradfile.c",
                    "line": 126,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   BEGINmodInit(smtradfile)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/smtradfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmtradfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smtradfile.c",
                    "line": 128,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   \tdbgprintf(\"traditional file format strgen init called, compiled with version %s\\n\", VERSION);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   ENDmodInit",
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
                    "file_name": "rsyslog-8.2102.0/tools/smtradfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmtradfwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smtradfwd.c",
                    "line": 137,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(obj_if_t *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   BEGINmodInit(smtradfwd)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|-> CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   CODEmodInit_QueryRegCFSLineHdlr",
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
                    "file_name": "rsyslog-8.2102.0/tools/smtradfwd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'modInitsmtradfwd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/tools/smtradfwd.c",
                    "line": 139,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'rsRetVal (**)(uchar *, signed int, ecslCmdHdrlType, rsRetVal (*)(), void *, void *)' to 'rsRetVal (**)()': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   CODESTARTmodInit",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   \t*ipIFVersProvided = CURR_MOD_IF_VERSION; /* we only support the current interface specification */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|-> CODEmodInit_QueryRegCFSLineHdlr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   \tdbgprintf(\"rsyslog traditional (network) forward format strgen init called, compiled with \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|   \t\t\"version %s\\n\", VERSION);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
