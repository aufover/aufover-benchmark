#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 0);
    if (ptr2 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        free(ptr1); /* possible invalid free */

        return EXIT_SUCCESS;
    }

    free(ptr2);
}

/**
 * @file 0068-test.c
 *
 * @brief Double free after realloc with 0 size fails.
 */
