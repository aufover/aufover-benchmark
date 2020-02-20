#include <stdlib.h>

int main(void)
{
    void *ptr = realloc(NULL, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    free(ptr);
    free(ptr); /* invalid free */
}

/**
 * @file 0002-test.c
 *
 * @brief Double free of realloc as malloc'd memory.
 */
