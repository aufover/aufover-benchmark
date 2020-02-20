#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(0, sizeof(char));
    if (ptr == NULL) {
        *ptr = 'A'; /* error */
        return EXIT_SUCCESS;
    }

    free(ptr);
}

/**
 * @file 0014-test.c
 *
 * @brief Usage of NULL after zero-size calloc.
 */
