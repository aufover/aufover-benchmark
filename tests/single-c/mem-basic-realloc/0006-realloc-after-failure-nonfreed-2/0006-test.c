#include <stdlib.h>

int main(void)
{
    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL)
        return EXIT_SUCCESS; /* leak */

    free(ptr2);
}

/**
 * @file 0006-test.c
 *
 * @brief Leak of original memory after failure of realloc.
 */
