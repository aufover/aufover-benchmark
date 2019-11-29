# wrapper around add_test() to deduplicate code
macro(add_test_wrap name cmd)
    message(STATUS "add_test: ${name}")
    add_test(NAME ${name}
        COMMAND ${cmd}
        WORKING_DIRECTORY ${dst_tool_dir})
    set_tests_properties("${name}" PROPERTIES
        LABELS ${tool})
endmacro()

# helper macro to deduplicate code of gen_test_for_tool parameterized by ${which}
macro(optionally_append_args which)
    if(EXISTS ${src_dir}/args-${which}@${tool})
        file(STRINGS ${src_dir}/args-${which}@${tool} args)
        set(cmd "${cmd} ${args}")
    elseif(EXISTS ${group_dir}/args-${which}@${tool})
        file(STRINGS ${group_dir}/args-${which}@${tool} args)
        set(cmd "${cmd} ${args}")
    endif()
endmacro()

# generate tests for a single test/tool pair
macro(gen_test_for_tool)
    # tool-specific RW working dir
    set(dst_tool_dir ${dst_dir}/${tool})
    file(MAKE_DIRECTORY ${dst_tool_dir})
    file(CREATE_LINK ${exp_file} ${dst_tool_dir}/output-exp.txt SYMBOLIC)
    file(CREATE_LINK ../${c_file} ${dst_tool_dir}/${c_file} SYMBOLIC)

    # prepare the command to run
    set(cmd "{\n\t${TOOL_EXEC_${tool}}")
    optionally_append_args(prefix)
    set(cmd "${cmd} ./${c_file}")
    optionally_append_args(suffix)
    set(cmd "${cmd}\n} >${dst_tool_dir}/output-raw.txt")

    # dump the command as a shell script
    set(cmd_tool_sh ${dst_tool_dir}/cmd-tool.sh)
    file(WRITE ${cmd_tool_sh} ${cmd})
    execute_process(COMMAND chmod 0755 ${cmd_tool_sh})

    # create a test-case for [exec]
    set(test_name_base "single-c/${group}/${test}@${tool}")
    set(cmd "bash" "${cmd_tool_sh}")
    set(test_name "${test_name_base}[exec]")
    add_test_wrap(${test_name} "${cmd}")
    if(EXISTS ${src_dir}/test-props@${tool})
        file(STRINGS ${src_dir}/test-props@${tool} props)
        set_tests_properties(${test_name} PROPERTIES ${props})
    elseif(EXISTS ${group_dir}/test-props@${tool})
        file(STRINGS ${group_dir}/test-props@${tool} props)
        set_tests_properties(${test_name} PROPERTIES ${props})
    endif()

    # create a test-case for [conv]
    set(cmd_convert ${dst_tool_dir}/cmd-convert)
    if(EXISTS ${src_dir}/output-convert.sh@${tool})
        file(CREATE_LINK ${src_dir}/output-convert.sh@${tool} ${cmd_convert} SYMBOLIC)
    elseif(EXISTS ${group_dir}/output-convert.sh@${tool})
        file(CREATE_LINK ${group_dir}/output-convert.sh@${tool} ${cmd_convert} SYMBOLIC)
    else()
        file(CREATE_LINK "/bin/cat" ${cmd_convert} SYMBOLIC)
    endif()
    set(cmd bash -c "${cmd_convert} <./output-raw.txt >./output-con.txt")
    add_test_wrap("${test_name_base}[conv]" "${cmd}")
    set_tests_properties("${test_name_base}[conv]" PROPERTIES
        DEPENDS "${test_name_base}[exec]")

    # create a test-case for [csgrep]
    set(cmd_csgrep "${UTIL_EXEC_csgrep} <./output-con.txt >./output-uni.txt")
    set(cmd bash -c "${cmd_csgrep}")
    add_test_wrap("${test_name_base}[csgrep]" "${cmd}")
    set_tests_properties("${test_name_base}[csgrep]" PROPERTIES
        DEPENDS "${test_name_base}[conv]")

    # create a test-case for [diff]
    set(cmd_diff ${dst_tool_dir}/cmd-diff.sh)
    if(EXISTS ${src_dir}/output-diff.sh@${tool})
        file(CREATE_LINK ${src_dir}/output-diff.sh@${tool} ${cmd_diff} SYMBOLIC)
    elseif(EXISTS ${group_dir}/output-diff.sh@${tool})
        file(CREATE_LINK ${group_dir}/output-diff.sh@${tool} ${cmd_diff} SYMBOLIC)
    else()
        file(CREATE_LINK ${CMAKE_CURRENT_SOURCE_DIR}/output-diff.sh ${cmd_diff} SYMBOLIC)
    endif()
    set(cmd ${cmd_diff} ./output-exp.txt ./output-uni.txt)
    add_test_wrap("${test_name_base}[diff]" "${cmd}")
    set_tests_properties("${test_name_base}[diff]" PROPERTIES
        DEPENDS "${test_name_base}[csgrep]")
endmacro()

# generate tests for a single test
macro(gen_test)
    # RO source dir
    set(src_dir ${group_dir}/${test})
    message(STATUS "test: ${src_dir}")

    # RW working dir
    set(dst_dir ${CMAKE_CURRENT_BINARY_DIR}/${group}/${test})
    file(MAKE_DIRECTORY ${dst_dir})

    # look for *.c input file
    file(GLOB input_files RELATIVE ${src_dir} CONFIGURE_DEPENDS ${src_dir}/*.c)
    list(LENGTH input_files input_files_cnt)
    if(NOT ${input_files_cnt} EQUAL 1)
        message(WARNING "Incorrect count of input files in ${src_dir}: ${input_files}")
    endif()
    list(GET input_files 0 c_file)
    if(NOT ${src_dir} STREQUAL ${dst_dir})
        file(CREATE_LINK ${src_dir}/${c_file} ${dst_dir}/${c_file} SYMBOLIC)
    endif()

    # go through enabled tools and check for which of them we have output-exp
    foreach(tool ${TOOLS_ENABLED})
        set(exp_file ${src_dir}/output-exp@${tool})
        if(EXISTS ${exp_file})
            gen_test_for_tool()
        endif()
    endforeach()
endmacro()

# go through all tests in a group
macro(gen_test_group)
    file(GLOB test_list RELATIVE ${group_dir} CONFIGURE_DEPENDS ${group_dir}/*)
    foreach(test ${test_list})
        if(${test} STREQUAL CMakeFiles)
            continue()
        endif()
        if(IS_DIRECTORY ${group_dir}/${test})
            gen_test()
        endif()
    endforeach()
endmacro()

# go through all test groups
file(GLOB group_list RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} CONFIGURE_DEPENDS *)
foreach(group ${group_list})
    if(${group} STREQUAL CMakeFiles)
        continue()
    endif()
    if(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/${group})
        set(group_dir ${CMAKE_CURRENT_SOURCE_DIR}/${group})
        gen_test_group()
    endif()
endforeach()

# check-without-diff target
set(CUSTOM_CTEST_CMD ${CTEST_CMD} -E "\\\\[diff\\\\]\\$")
string(REPLACE ";" " " CUSTOM_CTEST_CMD_STRING "${CTEST_CMD}")
add_custom_target(check-without-diff)
add_custom_command(TARGET check-without-diff
    COMMAND ${CUSTOM_CTEST_CMD}
    COMMENT ${CUSTOM_CTEST_CMD_STRING})
