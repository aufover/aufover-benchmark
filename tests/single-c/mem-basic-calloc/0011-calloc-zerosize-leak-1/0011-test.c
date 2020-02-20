#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(0, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    /* leak */
}

/**
 * @file 0011-test.c
 *
 * @brief Possible leak of calloc'd memory with 0 size.
 */
