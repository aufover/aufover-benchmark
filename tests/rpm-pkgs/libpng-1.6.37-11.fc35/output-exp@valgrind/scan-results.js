{
    "scan": {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libpng-1.6.37-11.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpng-1.6.37-11.fc35/valgrind/output",
        "time-created": "2021-12-07 15:45:49",
        "time-finished": "2021-12-07 15:52:09",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpng-1.6.37-11.fc35/valgrind/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/libpng-1.6.37-11.fc35/libpng-1.6.37-11.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211207.150340.g263db49.csexec-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libpng-1.6.37/contrib/libtests/pngstest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'write_one_file'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/contrib/libtests/pngstest.c",
                    "line": 3215,
                    "column": 24,
                    "event": "warning[-Wformat-overflow=]",
                    "message": "'%d' directive writing between 1 and 11 bytes into a region of size between 10 and 32",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3215 |       sprintf(name, \"%s%d.png\", tmpf, ++counter);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/contrib/libtests/pngstest.c",
                    "line": 3215,
                    "column": 21,
                    "event": "note",
                    "message": "directive argument in the range [-2147483647, 2147483647]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3215 |       sprintf(name, \"%s%d.png\", tmpf, ++counter);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/contrib/libtests/pngstest.c",
                    "line": 19,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 38,
                    "column": 10,
                    "event": "note",
                    "message": "'__sprintf_chk' output between 6 and 38 bytes into a destination of size 32",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 |                                   __glibc_objsize (__s), __fmt,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40 |                                   __va_arg_pack ());",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3213|         char name[32];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3214|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3215|->       sprintf(name, \"%s%d.png\", tmpf, ++counter);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3216|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3217|         if (png_image_write_to_file(&image->image, name, convert_to_8bit,",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libpng-1.6.37/.libs/pngtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 219883 with arguments: --relaxed ./contrib/testpngs/crashers/badcrc.png",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 173,
                    "event": "warning[UninitValue]",
                    "message": "Use of uninitialised value of size 8",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "/usr/lib64/libz.so.1.2.11",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 173,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 139,
                    "event": "note",
                    "message": "called from png_calculate_crc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwutil.c",
                    "line": 186,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwutil.c",
                    "line": 1053,
                    "event": "note",
                    "message": "called from png_compress_IDAT()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwutil.c",
                    "line": 2769,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwutil.c",
                    "line": 2739,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwrite.c",
                    "line": 899,
                    "event": "note",
                    "message": "called from png_write_row()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwrite.c",
                    "line": 593,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngwrite.c",
                    "line": 579,
                    "event": "note",
                    "message": "called from png_write_rows()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1507,
                    "event": "note",
                    "message": "called from test_one_file()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1952,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   #endif",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|->          crc = crc32(crc, ptr, safe_length);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|            /* The following should never issue compiler warnings; if they do the",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "libpng-1.6.37/pngerror.c",
                    "line": 19,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngerror.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'png_warning_parameter_unsigned'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngpriv.h",
                    "line": 1749,
                    "column": 4,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'buffer' may be used uninitialized",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749 |    png_format_number(buffer, buffer + (sizeof buffer), format, number)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngerror.c",
                    "line": 133,
                    "column": 1,
                    "event": "note",
                    "message": "by argument 1 of type 'const char *' to 'png_format_number' declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | png_format_number(png_const_charp start, png_charp end, int format,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngerror.c",
                    "line": 258,
                    "column": 9,
                    "event": "note",
                    "message": "'buffer' declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258 |    char buffer[PNG_NUMBER_BUFFER_SIZE];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1747|   /* Convenience macro that takes an array: */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1748|   #define PNG_FORMAT_NUMBER(buffer,format,number) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749|->    png_format_number(buffer, buffer + (sizeof buffer), format, number)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1750|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1751|   /* Suggested size for a number buffer (enough for 64 bits and a sign!) */",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'png_convert_to_rfc1123_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngpriv.h",
                    "line": 1749,
                    "column": 4,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'number_buf' may be used uninitialized",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749 |    png_format_number(buffer, buffer + (sizeof buffer), format, number)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.h",
                    "line": 335,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngpriv.h",
                    "line": 386,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 14,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngpriv.h",
                    "line": 1744,
                    "column": 33,
                    "event": "note",
                    "message": "by argument 1 of type 'const char *' to 'png_format_number' declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1744 | PNG_INTERNAL_FUNCTION(png_charp,png_format_number,(png_const_charp start,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/png.c",
                    "line": 755,
                    "column": 12,
                    "event": "note",
                    "message": "'number_buf' declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  755 |       char number_buf[5]; /* enough for a four-digit year */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1747|   /* Convenience macro that takes an array: */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1748|   #define PNG_FORMAT_NUMBER(buffer,format,number) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749|->    png_format_number(buffer, buffer + (sizeof buffer), format, number)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1750|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1751|   /* Suggested size for a number buffer (enough for 64 bits and a sign!) */",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libpng-1.6.37/.libs/pngtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 219883 with arguments: --relaxed ./contrib/testpngs/crashers/badcrc.png",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1674,
                    "event": "warning[SyscallParam]",
                    "message": "Syscall param write(buf) points to uninitialised byte(s)",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1674,
                    "event": "note",
                    "message": "Address 0x4b7164f is 47 bytes inside a block of size 4,096 alloc'd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from write()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from _IO_file_write@@GLIBC_2.2.5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from new_do_write()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from _IO_do_write@@GLIBC_2.2.5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from _IO_file_close_it@@GLIBC_2.2.5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from fclose@@GLIBC_2.2.5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1674,
                    "event": "note",
                    "message": "called from test_one_file()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libpng-1.6.37/pngtest.c",
                    "line": 1952,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1672|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1673|      FCLOSE(fpin);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1674|->    FCLOSE(fpout);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1675|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1676|      /* Summarize any warnings or errors and in 'strict' mode fail the test.",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
