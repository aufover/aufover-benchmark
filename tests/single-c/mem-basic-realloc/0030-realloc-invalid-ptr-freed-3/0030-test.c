#include <stdlib.h>

int main(void)
{
    void *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    free(ptr1);
    void *ptr2 = realloc(ptr1, 2 * sizeof(char)); /* error */
}

/**
 * @file 0030-test.c
 *
 * @brief Realloc of an invalid pointer.
 */
