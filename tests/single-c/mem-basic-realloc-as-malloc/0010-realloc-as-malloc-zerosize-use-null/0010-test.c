#include <stdlib.h>

int main(void)
{
    char *ptr = realloc(NULL, 0);
    if (ptr == NULL) {
        *ptr = 'A'; /* error */
        return EXIT_SUCCESS;
    }

    free(ptr);
}

/**
 * @file 0010-test.c
 *
 * @brief Usage of NULL pointer after zero-size realloc as malloc.
 */
