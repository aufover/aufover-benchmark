{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "parted-3.4-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/parted-3.4-6.fc35/valgrind/output",
        "time-created": "2022-11-24 00:29:10",
        "time-finished": "2022-11-24 00:53:12",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/parted-3.4-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/parted-3.4-6.fc35/parted-3.4-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12984 with arguments: -s dev-file mklabel amiga mkpart PTNNAME ext2 4096s 6143s",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/arch/linux.c",
                    "line": 2089,
                    "event": "warning[SyscallParam]",
                    "message": "Syscall param write(buf) points to uninitialised byte(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "parted-3.4/libparted/arch/linux.c",
                    "line": 2089,
                    "event": "note",
                    "message": "Address 0x4fc6900 is 256 bytes inside a block of size 1,024 alloc'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from write()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/arch/linux.c",
                    "line": 2089,
                    "event": "note",
                    "message": "called from linux_write()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/rdb.c",
                    "line": 741,
                    "event": "note",
                    "message": "called from amiga_write()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from ped_disk_commit_to_dev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 530,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 522,
                    "event": "note",
                    "message": "called from ped_disk_commit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 828,
                    "event": "note",
                    "message": "called from do_mkpart()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2087|           diobuf_start = diobuf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2088|           while (1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2089|->                 ssize_t status = write (arch_specific->fd, diobuf, write_length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2090|                   if (status == write_length) break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2091|                   if (status > 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "parted-3.4/libparted/fs/r/fat/bootsector.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fat_boot_sector_set_boot_code'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/fs/r/fat/bootsector.c",
                    "line": 282,
                    "column": 28,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 1 of 'strcpy' differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282 |         strcpy (bs->u.fat32.boot_code, FAT_BOOT_CODE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            uint8_t * {aka unsigned char *}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/features.h",
                    "line": 490,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/time.h",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/lib/time.h",
                    "line": 47,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/timer.h",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/geom.h",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/filesys.h",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/disk.h",
                    "line": 110,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/natmath.h",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/device.h",
                    "line": 100,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/constraint.h",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/include/parted/parted.h",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/fs/r/fat/fat.h",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/fs/r/fat/bootsector.c",
                    "line": 21,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/string_fortified.h",
                    "line": 77,
                    "column": 1,
                    "event": "note",
                    "message": "expected 'char * restrict' but argument is of type 'uint8_t *' {aka 'unsigned char *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77 | __NTH (strcpy (char *__restrict __dest, const char *__restrict __src))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|   \tmemcpy (bs->boot_jump, FAT_BOOT_JUMP, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|   \tPED_ASSERT (sizeof(FAT_BOOT_CODE) < sizeof(bs->u.fat32.boot_code));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|-> \tstrcpy (bs->u.fat32.boot_code, FAT_BOOT_CODE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|   \treturn 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'atari_probe'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 261,
                    "column": 62,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 1 of 'atr_pid_known' differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261 | #define atr_part_known(part, pid_list) (atr_pid_known ((part)->id, pid_list))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        ~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                              |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                              uint8_t * {aka unsigned char *}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 423,
                    "column": 23,
                    "event": "note",
                    "message": "in expansion of macro 'atr_part_known'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423 |                    && atr_part_known (&table.icd_part[0], atr_known_icd_pid)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 233,
                    "column": 28,
                    "event": "note",
                    "message": "expected 'const char *' but argument is of type 'uint8_t *' {aka 'unsigned char *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233 | atr_pid_known (const char* pid, const char** pid_list)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   }",
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
                    "message": "  261|-> #define atr_part_known(part, pid_list) (atr_pid_known ((part)->id, pid_list))",
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
                    "message": "  263|   #define atr_part_valid(part, sz) (atr_part_used(part)\\",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'atr_parse_add_rawpart'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 555,
                    "column": 39,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 2 of 'atr_part_sysraw' differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555 |         atr_part_sysraw (part, rawpart->id, rawpart->flag);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ~~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       const uint8_t * {aka const unsigned char *}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/atari.c",
                    "line": 512,
                    "column": 50,
                    "event": "note",
                    "message": "expected 'const char *' but argument is of type 'const uint8_t *' {aka 'const unsigned char *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512 | atr_part_sysraw (PedPartition* part, const char* id, uint8_t flag)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ~~~~~~~~~~~~^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|   \telse",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|   \t\tpart->fs_type = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|-> \tatr_part_sysraw (part, rawpart->id, rawpart->flag);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   \tconst_exact = ped_constraint_exact (&part->geom);",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5425 with arguments: ---pretend-input-tty bad u s p",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 651,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 651,
                    "event": "note",
                    "message": "called from _header_is_valid()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 991,
                    "event": "note",
                    "message": "called from gpt_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 1088,
                    "event": "note",
                    "message": "called from do_print()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|     PedDevice const *dev = disk->dev;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|->   if (PED_LE64_TO_CPU (gpt->Signature) != GPT_HEADER_SIGNATURE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  652|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  653|     /*",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18944 with arguments: dev-file 2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,308 (48 direct, 1,260 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/mac.c",
                    "line": 286,
                    "event": "note",
                    "message": "called from mac_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10791 with arguments: -s loop-file mklabel msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "136 (48 direct, 88 indirect) bytes in 1 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/loop.c",
                    "line": 84,
                    "event": "note",
                    "message": "called from loop_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13051 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2,448 (48 direct, 2,400 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/rdb.c",
                    "line": 358,
                    "event": "note",
                    "message": "called from amiga_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10629 with arguments: -s loop-file mklabel gpt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "228 (48 direct, 180 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 5",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 349,
                    "event": "note",
                    "message": "called from msdos_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 24151 with arguments: -s loop-file mklabel msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "228 (88 direct, 140 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 5",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1340,
                    "event": "note",
                    "message": "called from msdos_partition_new.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 2296,
                    "event": "note",
                    "message": "called from add_metadata_part.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 2445,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 2468,
                    "event": "note",
                    "message": "called from msdos_alloc_metadata.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1011,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1164,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1151,
                    "event": "note",
                    "message": "called from _disk_pop_update_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2085,
                    "event": "note",
                    "message": "called from ped_disk_delete_all()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1110,
                    "event": "note",
                    "message": "called from msdos_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 24293 with arguments: -s loop-file mklabel msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "316 (48 direct, 268 indirect) bytes in 1 blocks are definitely lost in loss record 6 of 6",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 349,
                    "event": "note",
                    "message": "called from msdos_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/duplicate",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11007 with arguments: msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/cs/geom.c",
                    "line": 80,
                    "event": "note",
                    "message": "called from ped_geometry_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/duplicate.c",
                    "line": 50,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10380 with arguments: -s loop-file mklabel msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "376 (88 direct, 288 indirect) bytes in 1 blocks are definitely lost in loss record 6 of 6",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 1372,
                    "event": "note",
                    "message": "called from gpt_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 1345,
                    "event": "note",
                    "message": "called from add_metadata_part.lto_priv.1()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 1592,
                    "event": "note",
                    "message": "called from gpt_alloc_metadata()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1011,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1164,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1151,
                    "event": "note",
                    "message": "called from _disk_pop_update_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2085,
                    "event": "note",
                    "message": "called from ped_disk_delete_all()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 980,
                    "event": "note",
                    "message": "called from gpt_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 25188 with arguments: -s loop-file mklabel dvh",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "480 (48 direct, 432 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 88,
                    "event": "note",
                    "message": "called from dvh_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19695 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "524 (88 direct, 436 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1340,
                    "event": "note",
                    "message": "called from msdos_partition_new.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 945,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1049,
                    "event": "note",
                    "message": "called from read_table()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1111,
                    "event": "note",
                    "message": "called from msdos_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15231 with arguments: -s dev-file mklabel gpt mkpart PTNNAME ext2 4096s 6143s",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "588 (48 direct, 540 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 88,
                    "event": "note",
                    "message": "called from dvh_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14754 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "588 (88 direct, 500 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 508,
                    "event": "note",
                    "message": "called from dvh_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 224,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 331,
                    "event": "note",
                    "message": "called from dvh_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11522 with arguments: -s /dev/loop0 mklabel msdos mkpart primary ext2 1m 5m mkpart primary ext2 5m 10m",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "612 (88 direct, 524 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1340,
                    "event": "note",
                    "message": "called from msdos_partition_new.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 945,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1049,
                    "event": "note",
                    "message": "called from read_table()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dos.c",
                    "line": 1111,
                    "event": "note",
                    "message": "called from msdos_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 32552 with arguments: -s loop-file mklabel msdos",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "656 (48 direct, 608 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 4",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/sun.c",
                    "line": 181,
                    "event": "note",
                    "message": "called from sun_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31413 with arguments: -s loop-file mklabel bsd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "656 (88 direct, 568 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 4",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/sun.c",
                    "line": 505,
                    "event": "note",
                    "message": "called from sun_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1109,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1166,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1151,
                    "event": "note",
                    "message": "called from _disk_pop_update_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 2085,
                    "event": "note",
                    "message": "called from ped_disk_delete_all()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/sun.c",
                    "line": 324,
                    "event": "note",
                    "message": "called from sun_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 25542 with arguments: -s loop-file mklabel dvh",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "676 (48 direct, 628 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/dvh.c",
                    "line": 88,
                    "event": "note",
                    "message": "called from dvh_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18877 with arguments: -s dev-file mklabel mac mkpart PTNNAME ext2 4096s 6143s",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "736 (48 direct, 688 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 527,
                    "event": "note",
                    "message": "called from gpt_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15298 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "736 (88 direct, 648 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 1372,
                    "event": "note",
                    "message": "called from gpt_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 816,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/gpt.c",
                    "line": 1103,
                    "event": "note",
                    "message": "called from gpt_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22306 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "852 (88 direct, 764 indirect) bytes in 1 blocks are definitely lost in loss record 6 of 6",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/sun.c",
                    "line": 505,
                    "event": "note",
                    "message": "called from sun_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/sun.c",
                    "line": 354,
                    "event": "note",
                    "message": "called from sun_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14687 with arguments: -s dev-file mklabel dvh mkpart primary ext2 4096s 6143s",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "928 (48 direct, 880 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/bsd.c",
                    "line": 183,
                    "event": "note",
                    "message": "called from bsd_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/tests/.libs/print-flags",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14006 with arguments: dev-file 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "928 (88 direct, 840 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1197,
                    "event": "note",
                    "message": "called from _ped_partition_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/bsd.c",
                    "line": 382,
                    "event": "note",
                    "message": "called from bsd_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from ped_partition_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/bsd.c",
                    "line": 281,
                    "event": "note",
                    "message": "called from bsd_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 201,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/tests/print-flags.c",
                    "line": 34,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
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
                    "file_name": "parted-3.4/parted/.libs/parted",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31145 with arguments: -s loop-file mklabel bsd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "980 (48 direct, 932 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "parted-3.4/libparted/libparted.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from ped_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 401,
                    "event": "note",
                    "message": "called from _ped_disk_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/labels/mac.c",
                    "line": 286,
                    "event": "note",
                    "message": "called from mac_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from ped_disk_new_fresh()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/libparted/disk.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from ped_disk_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from do_mklabel()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/command.c",
                    "line": 142,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/ui.c",
                    "line": 1687,
                    "event": "note",
                    "message": "called from non_interactive_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "parted-3.4/parted/parted.c",
                    "line": 2375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \tvoid*\t\tmem;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> \tmem = (void*) malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \tif (!mem) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   \t\tped_exception_throw (PED_EXCEPTION_FATAL, PED_EXCEPTION_CANCEL,",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
