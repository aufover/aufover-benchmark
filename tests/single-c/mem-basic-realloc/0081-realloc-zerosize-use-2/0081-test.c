#include <errno.h>
#include <stdlib.h>

int main(void)
{
    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    errno = 0;
    char *ptr2 = realloc(ptr1, 0);
    if (ptr2 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr1);

        return EXIT_SUCCESS;
    }

    *ptr2 = 'A'; /* error */

    free(ptr2);
}

/**
 * @file 0081-test.c
 *
 * @brief Usage of realloc'd memory with 0 size.
 */
