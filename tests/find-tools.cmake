# Append ${tool} to ${TOOLS_AVAILABLE} if ${cmd} returns zero exit status.
# Unless explicitly disabled by configuration add it also to ${TOOLS_ENABLED}.
macro(append_tool_on_succ tool cmd)
    execute_process(COMMAND bash -c "${cmd}"
        RESULT_VARIABLE cmd_status
        WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR})
    if(${cmd_status} EQUAL 0)
        list(APPEND TOOLS_AVAILABLE ${tool})
        option(TOOL_ENABLE_${tool} "enable testing of tool ${tool}" ON)
        message(STATUS "tool: ${tool}"
            "\n\tTOOL_EXEC_${tool}=${TOOL_EXEC_${tool}}"
            "\n\tTOOL_ENABLE_${tool}=${TOOL_ENABLE_${tool}}")
        if (${TOOL_ENABLE_${tool}})
            list(APPEND TOOLS_ENABLED ${tool})
        endif()
    endif()
endmacro()

# in-memory C program with emtpy main()
set(empty_main "<(echo 'int main(){}')")

# make it possible to override path to executables
set(TOOLS_SUPPORTED gcc clang cppcheck divine)
foreach(tool ${TOOLS_SUPPORTED})
    set(TOOL_EXEC_${tool} ${tool} CACHE STRING "command used to run ${tool}")
endforeach()

# probe for available static analyzers
append_tool_on_succ(gcc        "${TOOL_EXEC_gcc} -xc ${empty_main} -o /dev/null")
append_tool_on_succ(clang      "${TOOL_EXEC_clang} --analyze -Xanalyzer -analyzer-output=text -xc ${empty_main}")
append_tool_on_succ(cppcheck   "${TOOL_EXEC_cppcheck} --quiet ${empty_main}")
append_tool_on_succ(divine     "${TOOL_EXEC_divine} version >/dev/null 2>&1")
