#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    assert(errno == 0);

    void *ptr2 = realloc(ptr1, 0);
    if (ptr2 == NULL) {
        /* errno shall be set to an implementation-defined value. */
        assert(errno != 0);

        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr1);

        return EXIT_SUCCESS;
    }

    assert(errno == 0);
    free(ptr2);
    assert(errno == 0);
}

/**
 * @file 0064-test.c
 *
 * @brief Correct usage of realloc with zero size.
 */
