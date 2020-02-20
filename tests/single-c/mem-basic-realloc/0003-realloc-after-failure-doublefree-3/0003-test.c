#include <stdlib.h>

int main(void)
{
    void *ptr1 = realloc(NULL, sizeof(char));
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
 * @file 0003-test.c
 *
 * @brief Double free of original memory after failure of realloc.
 */
