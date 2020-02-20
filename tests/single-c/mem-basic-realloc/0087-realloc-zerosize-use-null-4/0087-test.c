#include <errno.h>
#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, sizeof(char));
    if (ptr1 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    errno = 0;
    char *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        *ptr3 = 'A'; /* error */

        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr2);

        return EXIT_SUCCESS;
    }

    free(ptr3);
}

/**
 * @file 0087-test.c
 *
 * @brief Usage NULL after realloc with 0 size.
 */
