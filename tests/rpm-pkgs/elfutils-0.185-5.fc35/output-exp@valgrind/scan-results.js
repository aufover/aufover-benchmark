{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "elfutils-0.185-5.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/elfutils-0.185-5.fc35/valgrind/output",
        "time-created": "2022-11-24 01:04:30",
        "time-finished": "2022-11-24 01:32:05",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/elfutils-0.185-5.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/elfutils-0.185-5.fc35/elfutils-0.185-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9212",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 73,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "36,760 bytes in 919 blocks are possibly lost in loss record 46 of 47",
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
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 73,
                    "event": "note",
                    "message": "called from intern_fde()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from __libdw_find_fde()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/dwarf_cfi_addrframe.c",
                    "line": 42,
                    "event": "note",
                    "message": "called from dwarf_cfi_addrframe()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/frame_unwind.c",
                    "line": 542,
                    "event": "note",
                    "message": "called from handle_cfi()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/frame_unwind.c",
                    "line": 741,
                    "event": "note",
                    "message": "called from __libdwfl_frame_unwind()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/dwfl_frame.c",
                    "line": 437,
                    "event": "note",
                    "message": "called from dwfl_thread_getframes()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf.c",
                    "line": 119,
                    "event": "note",
                    "message": "called from thread_callback()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/dwfl_frame.c",
                    "line": 285,
                    "event": "note",
                    "message": "called from dwfl_getthreads()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|       return (void *) -1l;",
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
                    "message": "   73|->   struct dwarf_fde *fde = malloc (sizeof (struct dwarf_fde));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|     if (fde == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       {",
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
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9212",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 122,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "22,056 bytes in 919 blocks are possibly lost in loss record 41 of 47",
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
                    "message": "called from tsearch()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from intern_fde()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/fde.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from __libdw_find_fde()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdw/dwarf_cfi_addrframe.c",
                    "line": 42,
                    "event": "note",
                    "message": "called from dwarf_cfi_addrframe()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/frame_unwind.c",
                    "line": 542,
                    "event": "note",
                    "message": "called from handle_cfi()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/frame_unwind.c",
                    "line": 741,
                    "event": "note",
                    "message": "called from __libdwfl_frame_unwind()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/dwfl_frame.c",
                    "line": 437,
                    "event": "note",
                    "message": "called from dwfl_thread_getframes()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf.c",
                    "line": 119,
                    "event": "note",
                    "message": "called from thread_callback()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libdwfl/dwfl_frame.c",
                    "line": 285,
                    "event": "note",
                    "message": "called from dwfl_getthreads()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/tests/backtrace-dwarf",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|     /* Add the new entry to the search tree.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|->   struct dwarf_fde **tres = tsearch (fde, &cache->fde_tree, &compare_fde);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|     if (tres == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|       {",
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
                    "file_name": "elfutils-0.185/src/unstrip",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11538 with arguments: -o testfile.unstrip testfile1.strip testfile1.debug",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libelf/common.h",
                    "line": 74,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "264 bytes in 1 blocks are definitely lost in loss record 4 of 9",
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
                    "file_name": "elfutils-0.185/libelf/common.h",
                    "line": 74,
                    "event": "note",
                    "message": "called from allocate_elf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libelf/elf_begin.c",
                    "line": 632,
                    "event": "note",
                    "message": "called from read_unmmaped_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/libelf/elf_begin.c",
                    "line": 713,
                    "event": "note",
                    "message": "called from read_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/src/unstrip.c",
                    "line": 2246,
                    "event": "note",
                    "message": "called from handle_explicit_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/src/unstrip.c",
                    "line": 2615,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|                 Elf_Cmd cmd, Elf *parent, Elf_Kind kind, size_t extra)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|->   Elf *result = (Elf *) calloc (1, sizeof (Elf) + extra);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|     if (result == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       __libelf_seterrno (ELF_E_NOMEM);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 573,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "elfutils-0.185/tests/test-7904/native.c",
                    "line": 1,
                    "column": 1,
                    "event": "warning[-Wimplicit-int]",
                    "message": "return type defaults to 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    1 | main () { while (1) pause (); }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "elfutils-0.185/tests/test-7904/native.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "elfutils-0.185/tests/test-7904/native.c",
                    "line": 1,
                    "column": 21,
                    "event": "warning[-Wimplicit-function-declaration]",
                    "message": "implicit declaration of function 'pause'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    1 | main () { while (1) pause (); }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
