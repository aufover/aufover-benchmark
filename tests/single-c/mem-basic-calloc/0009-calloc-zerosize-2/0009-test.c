#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    void * ptr = calloc(1, 0);
    if (ptr == NULL) {
        /* errno may be set to an implementation-defined value */
        return EXIT_SUCCESS;
    }

    assert(errno == 0);
    free(ptr);
    assert(errno == 0);
}

/**
 * @file 0009-test.c
 *
 * @brief Correct calloc usage with 0 as argument(s).
 */
