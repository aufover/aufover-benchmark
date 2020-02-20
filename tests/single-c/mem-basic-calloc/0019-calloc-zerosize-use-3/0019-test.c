#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(0, 0);
    if (ptr == NULL)
        return EXIT_SUCCESS;

    *ptr = 'A'; /* error */

    free(ptr);
}

/**
 * @file 0019-test.c
 *
 * @brief Usage of calloc'd memory with 0 size.
 */
