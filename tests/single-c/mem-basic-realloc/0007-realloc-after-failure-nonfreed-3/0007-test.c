#include <stdlib.h>

int main(void)
{
    void *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL)
        return EXIT_SUCCESS; /* leak */

    free(ptr2);
}

/**
 * @file 0007-test.c
 *
 * @brief Leak of original memory after failure of realloc.
 */
