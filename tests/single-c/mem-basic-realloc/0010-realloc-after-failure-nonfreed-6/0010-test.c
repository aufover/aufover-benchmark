#include <stdlib.h>

int main(void)
{
    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    free(ptr2);

    /* leak */
}

/**
 * @file 0010-test.c
 *
 * @brief Leak of original memory after failure of realloc.
 */
