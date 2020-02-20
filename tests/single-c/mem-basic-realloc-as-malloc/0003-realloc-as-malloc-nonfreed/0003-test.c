#include <stdlib.h>

int main(void)
{
    void *ptr = realloc(NULL, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    /* leak */
}

/**
 * @file 0003-test.c
 *
 * @brief Memory leak caused by realloc as malloc.
 */
