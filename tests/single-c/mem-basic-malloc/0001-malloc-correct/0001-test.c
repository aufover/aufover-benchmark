#include <assert.h>
#include <errno.h>
#include <stdlib.h>

int main(void)
{
    errno = 0;

    void *ptr = malloc(sizeof(char));
    if (ptr == NULL) {
        assert(errno == ENOMEM);
        return EXIT_SUCCESS;
    }

    assert(errno == 0);
    free(ptr);
    assert(errno == 0);
}

/**
 * @filename 0001-test.c
 *
 * @brief Correct behaviour of malloc.
 */
