#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(0, 0);
    if (ptr == NULL)
        return EXIT_SUCCESS;

    /* leak */
}

/**
 * @file 0013-test.c
 *
 * @brief Possible leak of calloc'd memory with 0 size.
 */
