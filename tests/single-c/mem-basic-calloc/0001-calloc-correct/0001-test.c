#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    char *ptr = calloc(1, sizeof(char));
    if (ptr == NULL) {
        assert(errno == ENOMEM);
        return EXIT_SUCCESS;
    }

    assert(*ptr == 0);
    assert(errno == 0);

    free(ptr);

    assert(errno == 0);
}

/**
 * @file 0001-test.c
 *
 * @brief Correct behaviour of calloc.
 */
