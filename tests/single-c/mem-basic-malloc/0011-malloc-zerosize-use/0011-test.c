#include <stdlib.h>

int main(void)
{
    char *ptr = malloc(0);
    if (ptr == NULL)
        return EXIT_SUCCESS;

    *ptr = 'A'; /* error */

    free(ptr);
}

/**
 * @file 0011-test.c
 *
 * @brief Usage of malloc'd memory with 0 size.
 */
