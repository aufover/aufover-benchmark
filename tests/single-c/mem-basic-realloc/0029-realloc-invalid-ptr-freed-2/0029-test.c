#include <stdlib.h>

int main(void)
{
    void *ptr1 = calloc(1, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    free(ptr1);
    void *ptr2 = realloc(ptr1, 2 * sizeof(char)); /* error */
}

/**
 * @file 0029-test.c
 *
 * @brief Realloc of an invalid pointer.
 */
