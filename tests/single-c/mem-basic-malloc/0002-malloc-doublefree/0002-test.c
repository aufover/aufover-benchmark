#include <stdlib.h>

int main(void)
{
    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    free(ptr);
    free(ptr); /* invalid free */
}

/**
 * @file 0002-test.c
 *
 * @brief Double free of malloc'd memory.
 */
