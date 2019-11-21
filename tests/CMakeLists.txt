# minimum cmake version we can use to run the benchmark
cmake_minimum_required(VERSION 3.0)

# declare that we do not need any C/C++ compiler
project(aufover-benchmark NONE)

# enable use of ctest
enable_testing()

# check count of CPU cores
include(ProcessorCount)
ProcessorCount(CPU_COUNT)
if(${CPU_COUNT} EQUAL 0)
    set(CPU_COUNT 1)
endif()
message(STATUS "CPU_COUNT: ${CPU_COUNT}")

# append $CTEST_OPTS environment variable to ctest args
string(REPLACE " " ";" CTEST_OPTS "$ENV{CTEST_OPTS}")

# make target `check`
set(CTEST_CMD ctest --output-on-failure -j${CPU_COUNT} ${CTEST_OPTS})
string(REPLACE ";" " " CTEST_CMD_STRING "${CTEST_CMD}")
add_custom_target(check)
add_custom_command(TARGET check
    COMMAND ${CTEST_CMD}
    COMMENT ${CTEST_CMD_STRING})

# find required utils
include(find-utils.cmake)

# find available/enabled tools
include(find-tools.cmake)

# make target list-enabled-tools
add_custom_target(list-enabled-tools COMMAND echo ${TOOLS_ENABLED})

# add top-level test groups
add_subdirectory(single-c)
