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
    else()
        message(STATUS "tool: ${tool} NOT FOUND")
    endif()
endmacro()

# in-memory C program with empty main()
set(empty_main "<(echo 'int main(){}')")

# in-memory C program with main() that may trigger an invalid dereference
set(broken_main "<(echo 'int main() { void **p = *p; }')")

# make it possible to override path to executables
set(TOOLS_SUPPORTED gcc clang cppcheck cbmc divine symbiotic)
foreach(tool ${TOOLS_SUPPORTED})
    set(TOOL_EXEC_${tool} ${tool} CACHE STRING "command used to run ${tool}")
endforeach()
set(TOOLS_SUPPORTED ${TOOLS_SUPPORTED} predator)
set(TOOL_EXEC_predator "${TOOL_EXEC_gcc} -fplugin=predator"
    CACHE STRING "command used to run predator")

# probe for available static analyzers and formal verification tools
append_tool_on_succ(gcc        "${TOOL_EXEC_gcc} -xc ${empty_main} -o /dev/null")
append_tool_on_succ(clang      "${TOOL_EXEC_clang} --analyze -Xanalyzer \
                                -analyzer-output=text -xc ${empty_main}")
append_tool_on_succ(cppcheck   "${TOOL_EXEC_cppcheck} --quiet ${empty_main}")
append_tool_on_succ(cbmc       "${TOOL_EXEC_cbmc} --version >/dev/null 2>&1 && \
                                test -x /usr/bin/cbmc-convert-output")
append_tool_on_succ(divine     "${TOOL_EXEC_divine} version >/dev/null 2>&1 && \
                                test -x /usr/bin/divine2csgrep")
append_tool_on_succ(symbiotic  "${TOOL_EXEC_symbiotic} --version >/dev/null 2>&1 && \
                                test -x /usr/bin/symbiotic2cs")
append_tool_on_succ(predator   "${TOOL_EXEC_predator} -xc ${broken_main} -o /dev/null \
                                2>&1 | grep 'error: invalid dereference' >/dev/null")
