#include <stdlib.h>

int main(void)
{
    void *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    free(ptr2);

    /* leak */
}

/**
 * @file 0011-test.c
 *
 * @brief Leak of original memory after failure of realloc.
 */
