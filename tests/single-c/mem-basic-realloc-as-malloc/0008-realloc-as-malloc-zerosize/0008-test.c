#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    void *ptr = realloc(NULL, 0);
    if (ptr == NULL) {
        /* Errno may be set to an implementation-defined value:
           * POSIX.1-2008 says that errno shall be set to
                          an implementation-defined value
           * POSIX.1-2017 says that errno shall not be set in this case */
        return EXIT_SUCCESS;
    }

    assert(errno == 0);
    free(ptr);
    assert(errno == 0);
}

/**
 * @file 0008-test.c
 *
 * @brief Correct behaviour of realloc as malloc with 0 size argument.
 */
