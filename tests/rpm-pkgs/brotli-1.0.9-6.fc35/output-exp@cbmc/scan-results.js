{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "brotli-1.0.9-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/brotli-1.0.9-6.fc35/cbmc/output",
        "time-created": "2023-01-26 17:53:12",
        "time-finished": "2023-01-26 18:01:48",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/brotli-1.0.9-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/brotli-1.0.9-6.fc35/brotli-1.0.9-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "brotli-1.0.9/c/dec/decode.c",
                    "line": 2036,
                    "column": 41,
                    "event": "warning[-Wvla-parameter]",
                    "message": "argument 2 of type ‘const uint8_t *’ {aka ‘const unsigned char *’} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2036 |     size_t encoded_size, const uint8_t* encoded_buffer, size_t* decoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ~~~~~~~~~~~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/dec/decode.c",
                    "line": 7,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/include/brotli/decode.h",
                    "line": 204,
                    "column": 19,
                    "event": "note",
                    "message": "previously declared as a variable length array ‘const uint8_t[*decoded_size]’ {aka ‘const unsigned char[*decoded_size]’}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204 |     const uint8_t encoded_buffer[BROTLI_ARRAY_PARAM(encoded_size)],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2034|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2035|   BrotliDecoderResult BrotliDecoderDecompress(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2036|->     size_t encoded_size, const uint8_t* encoded_buffer, size_t* decoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2037|       uint8_t* decoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2038|     BrotliDecoderState s;",
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
                    "file_name": "brotli-1.0.9/c/dec/decode.c",
                    "line": 2037,
                    "column": 14,
                    "event": "warning[-Wvla-parameter]",
                    "message": "argument 4 of type ‘uint8_t *’ {aka ‘unsigned char *’} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2037 |     uint8_t* decoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/dec/decode.c",
                    "line": 7,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/include/brotli/decode.h",
                    "line": 206,
                    "column": 13,
                    "event": "note",
                    "message": "previously declared as a variable length array ‘uint8_t[encoded_size]’ {aka ‘unsigned char[encoded_size]’}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206 |     uint8_t decoded_buffer[BROTLI_ARRAY_PARAM(*decoded_size)]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2035|   BrotliDecoderResult BrotliDecoderDecompress(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2036|       size_t encoded_size, const uint8_t* encoded_buffer, size_t* decoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2037|->     uint8_t* decoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2038|     BrotliDecoderState s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2039|     BrotliDecoderResult result;",
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
                    "file_name": "brotli-1.0.9/c/enc/encode.c",
                    "line": 1473,
                    "column": 20,
                    "event": "warning[-Wvla-parameter]",
                    "message": "argument 5 of type ‘const uint8_t *’ {aka ‘const unsigned char *’} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1473 |     const uint8_t* input_buffer, size_t* encoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/enc/encode.c",
                    "line": 9,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/include/brotli/encode.h",
                    "line": 314,
                    "column": 19,
                    "event": "note",
                    "message": "previously declared as a variable length array ‘const uint8_t[*encoded_size]’ {aka ‘const unsigned char[*encoded_size]’}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314 |     const uint8_t input_buffer[BROTLI_ARRAY_PARAM(input_size)],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1471|   BROTLI_BOOL BrotliEncoderCompress(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1472|       int quality, int lgwin, BrotliEncoderMode mode, size_t input_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1473|->     const uint8_t* input_buffer, size_t* encoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474|       uint8_t* encoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1475|     BrotliEncoderState* s;",
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
                    "file_name": "brotli-1.0.9/c/enc/encode.c",
                    "line": 1474,
                    "column": 14,
                    "event": "warning[-Wvla-parameter]",
                    "message": "argument 7 of type ‘uint8_t *’ {aka ‘unsigned char *’} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474 |     uint8_t* encoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/enc/encode.c",
                    "line": 9,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "brotli-1.0.9/c/include/brotli/encode.h",
                    "line": 316,
                    "column": 13,
                    "event": "note",
                    "message": "previously declared as a variable length array ‘uint8_t[input_size]’ {aka ‘unsigned char[input_size]’}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316 |     uint8_t encoded_buffer[BROTLI_ARRAY_PARAM(*encoded_size)]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1472|       int quality, int lgwin, BrotliEncoderMode mode, size_t input_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1473|       const uint8_t* input_buffer, size_t* encoded_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474|->     uint8_t* encoded_buffer) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1475|     BrotliEncoderState* s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1476|     size_t out_size = *encoded_size;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
