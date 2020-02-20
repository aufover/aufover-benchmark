#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    /* leak */
}

/**
 * @file 0003-test.c
 *
 * @brief Leak of calloc'd memory.
 */
