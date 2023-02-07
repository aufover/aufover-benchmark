{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-pkcs11-0.4.11-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/divine/output",
        "time-created": "2023-01-26 11:01:33",
        "time-finished": "2023-01-26 11:08:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/openssl-pkcs11-0.4.11-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
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
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 120,
                    "column": 7,
                    "event": "warning",
                    "message": "implicit declaration of function 'tcgetattr' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (tcgetattr(0, &old) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \t\t/* Turn echoing off and fail if we can't. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|-> \t\tif (tcgetattr(0, &old) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t\t\trc = 4;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   \t\t\tgoto failed;",
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
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 127,
                    "column": 7,
                    "event": "warning",
                    "message": "implicit declaration of function 'tcsetattr' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (tcsetattr(0, TCSAFLUSH, &new) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   \t\tnew = old;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   \t\tnew.c_lflag &= ~ECHO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|-> \t\tif (tcsetattr(0, TCSAFLUSH, &new) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|   \t\t\trc = 5;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   \t\t\tgoto failed;",
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
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 252,
                    "column": 7,
                    "event": "warning",
                    "message": "'PKCS11_sign' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 470,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_sign' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_sign(int type,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \trc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \t\tsignature, &siglen, authkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \tif (rc != 1) {",
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
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 202,
                    "column": 6,
                    "event": "warning",
                    "message": "implicit declaration of function 'tcgetattr' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (tcgetattr(0, &old) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   #if !defined(_WIN32) || defined(__CYGWIN__)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   \t/* Turn echoing off and fail if we can't. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|-> \tif (tcgetattr(0, &old) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   \t\trc = 13;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   \t\tgoto failed;",
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
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 209,
                    "column": 6,
                    "event": "warning",
                    "message": "implicit declaration of function 'tcsetattr' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (tcsetattr(0, TCSAFLUSH, &new) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|   \tnew = old;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|   \tnew.c_lflag &= ~ECHO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|-> \tif (tcsetattr(0, TCSAFLUSH, &new) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   \t\trc = 14;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|   \t\tgoto failed;",
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
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 261,
                    "column": 7,
                    "event": "warning",
                    "message": "'PKCS11_private_decrypt' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 494,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_private_decrypt' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_private_decrypt(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|-> \trc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   \t\t\tdecrypted, authkey, RSA_PKCS1_PADDING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|   \tif (rc != RANDOM_SIZE) {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
