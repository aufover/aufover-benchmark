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

        fetch_build()
        # TODO
    endif()
endforeach()
