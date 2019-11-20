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

    # prepare the command to run
    set(cmd ${TOOL_EXEC_${tool}})
    optionally_append_args(prefix)
    set(cmd "${cmd} ../${c_file} > ${dst_tool_dir}/output-raw.txt")
    optionally_append_args(suffix)

    # dump the command as a shell script
    set(cmd_tool_sh ${dst_tool_dir}/cmd-tool.sh)
    file(WRITE ${cmd_tool_sh} ${cmd})

    # create a test-case for this
    set(test_name "single-c/${group}/${test}@${tool}[exec]")
    message(STATUS "add_test: ${test_name}")
    add_test(NAME ${test_name}
        COMMAND bash ${cmd_tool_sh}
        WORKING_DIRECTORY ${dst_tool_dir})
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
    file(CREATE_LINK ${src_dir}/${c_file} ${dst_dir}/${c_file} SYMBOLIC)

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
        if(IS_DIRECTORY ${group_dir}/${test})
            gen_test()
        endif()
    endforeach()
endmacro()

# go through all test groups
file(GLOB group_list RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} CONFIGURE_DEPENDS *)
foreach(group ${group_list})
    if(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/${group})
        set(group_dir ${CMAKE_CURRENT_SOURCE_DIR}/${group})
        gen_test_group()
    endif()
endforeach()
