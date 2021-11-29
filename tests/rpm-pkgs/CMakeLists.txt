set(MOCK_PROFILE "fedora-35-x86_64" CACHE STRING "mock configuration to use by csmock")

# check for available csmock tools (plug-ins)
execute_process(COMMAND bash -c "set pipefail; csmock --list-available-tools | sed -e 's| .*$||' | tr '\n' ';'"
    RESULT_VARIABLE cmd_status
    OUTPUT_VARIABLE CSMOCK_TOOLS)
if(${cmd_status} EQUAL 0)
    message(STATUS "CSMOCK_TOOLS: ${CSMOCK_TOOLS}")
else()
    message(FATAL_ERROR "Unable to list csmock tools")
endif()

# list available tools
set_property(GLOBAL PROPERTY TARGET_MESSAGES OFF)
add_custom_target(list-available-tools)
add_custom_command(TARGET list-available-tools
    COMMAND echo ${CSMOCK_TOOLS})

# wrapper around add_test() to deduplicate code
# FIXME: copy-pasted from single-c
macro(add_test_wrap name cmd)
    add_test(NAME ${name}
        COMMAND ${cmd}
        WORKING_DIRECTORY ${dst_tool_dir})
    if(NOT "${props}" STREQUAL "")
        set_tests_properties(${name} PROPERTIES ${props})
    endif()
    get_test_property(${name} LABELS labels)
    if(NOT ${labels} STREQUAL "NOTFOUND")
        set(labels "${tool} ${labels}")
    else()
        set(labels "${tool}")
    endif()
    set_tests_properties("${name}" PROPERTIES LABELS ${labels})
endmacro()

# fetch ${build} using the fetch.sh script
macro(fetch_build)
    set(fetch_script ${src_build_dir}/fetch.sh)
    if(NOT EXISTS ${fetch_script})
        set(fetch_script ${CMAKE_CURRENT_SOURCE_DIR}/fetch.sh)
    endif()

    add_test(NAME "${build}[fetch]"
        COMMAND ${fetch_script} ${build}
        WORKING_DIRECTORY ${dst_build_dir})
endmacro()

# add [verify] test for a single build and single tool
macro(tool_verify_build)
    # create a working directory for the test
    set(dst_test_dir ${dst_build_dir}/${tool})
    file(MAKE_DIRECTORY ${dst_test_dir})

    # symlink for directory with expected results
    file(CREATE_LINK ${exp_out_dir} ${dst_test_dir}/output-exp SYMBOLIC)

    # path to directory with actual results
    set(dst_out_dir ${dst_test_dir}/output)

    # construct csmock command
    set(scan_ini ${dst_out_dir}/scan.ini)
    set(cmd "rm -f ${scan_ini}\\;")
    set(cmd "${cmd} csmock -o ${dst_out_dir}")
    set(cmd "${cmd} -f ${dst_build_dir}/${build}.src.rpm")
    set(cmd "${cmd} -r ${MOCK_PROFILE}")
    set(cmd "${cmd} -t ${tool}")
    if(EXISTS ${src_build_dir}/csmock-args@${tool})
        file(STRINGS ${src_build_dir}/csmock-args@${tool} args)
        set(cmd "${cmd} ${args}")
    elseif(EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/csmock-args@${tool})
        file(STRINGS ${CMAKE_CURRENT_SOURCE_DIR}/csmock-args@${tool} args)
        set(cmd "${cmd} ${args}")
    endif()
    set(cmd "${cmd}\\; grep exit-code ${scan_ini}")

    # dump the command as a shell script
    set(run_csmock_sh ${dst_test_dir}/run-csmock.sh)
    file(WRITE ${run_csmock_sh} ${cmd})
    execute_process(COMMAND chmod 0755 ${run_csmock_sh})

    # add test that runs run-csmock.sh (after the SRPM is fetched)
    set(test_name_base "${build}@${tool}")
    add_test_wrap("${test_name_base}[verify]" "${run_csmock_sh}")
    set_tests_properties("${test_name_base}[verify]" PROPERTIES
        DEPENDS "${build}[fetch]"
        RUN_SERIAL ON)
    set_tests_properties("${build}[fetch]" PROPERTIES LABELS ${tool})
endmacro()

# add [diff] test for a single build and single tool
macro(tool_diff_output)
    set(cmd_diff ${dst_build_dir}/output-diff.sh)
    if(EXISTS ${src_build_dir}/output-diff.sh@${tool})
        file(CREATE_LINK ${src_build_dir}/output-diff.sh@${tool} ${cmd_diff} SYMBOLIC)
    elseif(EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/output-diff.sh@${tool})
        file(CREATE_LINK ${CMAKE_CURRENT_SOURCE_DIR}/output-diff.sh@${tool} ${cmd_diff} SYMBOLIC)
    else()
        file(CREATE_LINK ${CMAKE_CURRENT_SOURCE_DIR}/output-diff.sh ${cmd_diff} SYMBOLIC)
    endif()
    set(cmd ${cmd_diff} ${dst_test_dir}/output-exp ${dst_out_dir})
    if(${PHASE_ENABLE_diff})
        add_test_wrap("${test_name_base}[diff]" "${cmd}")
        set_tests_properties("${test_name_base}[diff]" PROPERTIES
            DEPENDS "${test_name_base}[verify]")
    endif()
endmacro()

# go through all available tools and create tests for them
macro(handle_build)
    foreach(tool ${CSMOCK_TOOLS})
        set(exp_out_dir ${src_build_dir}/output-exp@${tool})
        if(IS_DIRECTORY ${exp_out_dir})
            tool_verify_build()
            tool_diff_output()
        endif()
    endforeach()
endmacro()

# go through all builds
file(GLOB build_list RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} CONFIGURE_DEPENDS *)
foreach(build ${build_list})
    if(${build} STREQUAL CMakeFiles OR ${build} STREQUAL Testing)
        continue()
    endif()

    set(src_build_dir ${CMAKE_CURRENT_SOURCE_DIR}/${build})
    if(IS_DIRECTORY ${src_build_dir})
        # create the corresponding directory in work directory
        set(dst_build_dir ${CMAKE_CURRENT_BINARY_DIR}/${build})
        file(MAKE_DIRECTORY ${dst_build_dir})

        # get .src.rpm unless we already have it
        fetch_build()

        # add the actual tests
        handle_build()
    endif()
endforeach()

# check-only target
# FIXME: copy-pasted from single-c
string(REPLACE ";" " " CTEST_CMD_STRING "${CTEST_CMD}")
add_custom_target(check-only)
add_custom_command(TARGET check-only
    COMMAND ${CTEST_CMD}
    COMMENT ${CTEST_CMD_STRING})
