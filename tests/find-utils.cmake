# make sure that csgrep is available
set(UTIL_EXEC_csgrep csgrep CACHE STRING "command used to run csgrep")
execute_process(COMMAND bash -c "${UTIL_EXEC_csgrep} <&-"
    RESULT_VARIABLE cmd_status)
if(NOT ${cmd_status} EQUAL 0)
    message(FATAL_ERROR "could not execute csgrep: ${TOOL_EXEC_csgrep}")
endif()
