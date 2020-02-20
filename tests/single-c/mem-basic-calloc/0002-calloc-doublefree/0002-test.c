#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    free(ptr);
    free(ptr); /* invalid free */
}

/**
 * @file 0002-test.c
 *
 * @brief Double free of calloc'd memory.
 */
