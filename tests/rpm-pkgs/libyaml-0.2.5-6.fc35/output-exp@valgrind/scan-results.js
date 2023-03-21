{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libyaml-0.2.5-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/valgrind/output",
        "time-created": "2022-11-23 12:13:16",
        "time-finished": "2022-11-23 12:18:57",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/libyaml-0.2.5-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 182,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "688,128 bytes in 42 blocks are definitely lost in loss record 7 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 182,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|       memset(parser, 0, sizeof(yaml_parser_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|->     if (!BUFFER_INIT(parser, parser->raw_buffer, INPUT_RAW_BUFFER_SIZE))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|       if (!BUFFER_INIT(parser, parser->buffer, INPUT_BUFFER_SIZE))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 184,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2,064,384 bytes in 42 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 184,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|       if (!BUFFER_INIT(parser, parser->raw_buffer, INPUT_RAW_BUFFER_SIZE))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|->     if (!BUFFER_INIT(parser, parser->buffer, INPUT_BUFFER_SIZE))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|       if (!QUEUE_INIT(parser, parser->tokens, INITIAL_QUEUE_SIZE, yaml_token_t*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 186,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "53,760 bytes in 42 blocks are definitely lost in loss record 6 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 186,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|       if (!BUFFER_INIT(parser, parser->buffer, INPUT_BUFFER_SIZE))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|->     if (!QUEUE_INIT(parser, parser->tokens, INITIAL_QUEUE_SIZE, yaml_token_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       if (!STACK_INIT(parser, parser->indents, int*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 188,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2,688 bytes in 42 blocks are definitely lost in loss record 1 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 188,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|       if (!QUEUE_INIT(parser, parser->tokens, INITIAL_QUEUE_SIZE, yaml_token_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->     if (!STACK_INIT(parser, parser->indents, int*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       if (!STACK_INIT(parser, parser->simple_keys, yaml_simple_key_t*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 190,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "26,880 bytes in 42 blocks are definitely lost in loss record 5 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 190,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       if (!STACK_INIT(parser, parser->indents, int*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->     if (!STACK_INIT(parser, parser->simple_keys, yaml_simple_key_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       if (!STACK_INIT(parser, parser->states, yaml_parser_state_t*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 192,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2,688 bytes in 42 blocks are definitely lost in loss record 2 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 192,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       if (!STACK_INIT(parser, parser->simple_keys, yaml_simple_key_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|->     if (!STACK_INIT(parser, parser->states, yaml_parser_state_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|       if (!STACK_INIT(parser, parser->marks, yaml_mark_t*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 194,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16,128 bytes in 42 blocks are definitely lost in loss record 4 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 194,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       if (!STACK_INIT(parser, parser->states, yaml_parser_state_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->     if (!STACK_INIT(parser, parser->marks, yaml_mark_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|       if (!STACK_INIT(parser, parser->tag_directives, yaml_tag_directive_t*))",
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
                    "file_name": "yaml-0.2.5/tests/.libs/test-reader",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 504",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 196,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10,752 bytes in 42 blocks are definitely lost in loss record 3 of 8",
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
                    "file_name": "yaml-0.2.5/src/api.c",
                    "line": 196,
                    "event": "note",
                    "message": "called from yaml_parser_initialize()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 132,
                    "event": "note",
                    "message": "called from check_utf8_sequences()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/tests/test-reader.c",
                    "line": 353,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|       if (!STACK_INIT(parser, parser->marks, yaml_mark_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|->     if (!STACK_INIT(parser, parser->tag_directives, yaml_tag_directive_t*))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|           goto error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   ",
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
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'yaml_emitter_write_plain_scalar'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 28,
                    "column": 6,
                    "event": "warning[-Wunused-value]",
                    "message": "value computed is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 |      && ((emitter->line_break == YAML_CR_BREAK ?                                \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 56,
                    "column": 11,
                    "event": "note",
                    "message": "in expansion of macro 'PUT_BREAK'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56 |          (PUT_BREAK(emitter),                                                   \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 1962,
                    "column": 18,
                    "event": "note",
                    "message": "in expansion of macro 'WRITE_BREAK'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1962 |             if (!WRITE_BREAK(emitter, string)) return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   #define PUT_BREAK(emitter)                                                      \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|       (FLUSH(emitter)                                                             \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|->      && ((emitter->line_break == YAML_CR_BREAK ?                                \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|                (*(emitter->buffer.pointer++) = (yaml_char_t) '\\r') :              \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|             emitter->line_break == YAML_LN_BREAK ?                                \\",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
