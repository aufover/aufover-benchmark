#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, 0);
    if (ptr == NULL) {
        *ptr = 'A'; /* error */
        return EXIT_SUCCESS;
    }

    free(ptr);
}

/**
 * @file 0015-test.c
 *
 * @brief Usage of NULL after zero-size calloc.
 */
