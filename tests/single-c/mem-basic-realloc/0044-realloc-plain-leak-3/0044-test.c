#include <stdlib.h>

int main(void)
{
    void *ptr = realloc(NULL, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    realloc(ptr, 2 * sizeof(char)); /* leak */
}

/**
 * @file 0044-test.c
 *
 * @brief Simplest leak by realloc.
 */
