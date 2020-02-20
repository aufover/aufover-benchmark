#include <stdlib.h>

int main(void)
{
    char *ptr = malloc(0);
    if (ptr == NULL)
        return EXIT_SUCCESS;

    /* leak */
}

/**
 * @file 0009-test.c
 *
 * @brief Possible memory leak of malloc'd memory with 0 size.
 */
