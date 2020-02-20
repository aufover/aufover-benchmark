#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    char *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        free(ptr2); /* possible invalid free */

        return EXIT_SUCCESS;
    }

    free(ptr3);
}

/**
 * @file 0071-test.c
 *
 * @brief Double free after realloc with 0 size fails.
 */
