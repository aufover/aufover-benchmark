#include <stdlib.h>

int main(void)
{
    void *ptr = calloc(1, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    realloc(ptr, 2 * sizeof(char)); /* leak */
}

/**
 * @file 0043-test.c
 *
 * @brief Simplest leak by realloc.
 */
