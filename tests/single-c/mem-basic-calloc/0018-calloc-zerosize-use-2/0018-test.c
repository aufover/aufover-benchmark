#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, 0);
    if (ptr == NULL)
        return EXIT_SUCCESS;

    *ptr = 'A'; /* error */

    free(ptr);
}

/**
 * @file 0018-test.c
 *
 * @brief Usage of calloc'd memory with 0 size.
 */
