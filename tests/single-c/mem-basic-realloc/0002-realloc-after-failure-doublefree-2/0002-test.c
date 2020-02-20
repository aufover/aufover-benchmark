#include <stdlib.h>

int main(void)
{
    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        free(ptr1); /* invalid free */

        return EXIT_SUCCESS;
    }

    free(ptr2);
}

/**
 * @file 0002-test.c
 *
 * @brief Double free of original memory after failure of realloc.
 */
