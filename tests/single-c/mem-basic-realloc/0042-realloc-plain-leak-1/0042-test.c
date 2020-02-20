#include <stdlib.h>

int main(void)
{
    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    realloc(ptr, 2 * sizeof(char)); /* leak */
}

/**
 * @file 0042-test.c
 *
 * @brief Simplest leak by realloc.
 */
