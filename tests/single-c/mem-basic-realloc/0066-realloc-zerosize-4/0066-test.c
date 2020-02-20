#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    assert(errno == 0);

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    assert(errno == 0);

    void *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        /* errno shall be set to an implementation-defined value. */
        assert(errno != 0);

        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr2);

        return EXIT_SUCCESS;
    }

    assert(errno == 0);
    free(ptr3);
    assert(errno == 0);
}

/**
 * @file 0066-test.c
 *
 * @brief Correct usage of realloc with zero size.
 */
