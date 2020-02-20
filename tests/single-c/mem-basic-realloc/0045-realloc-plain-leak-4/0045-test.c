#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    realloc(ptr2, 3 * sizeof(char)); /* leak */
}

/**
 * @file 0045-test.c
 *
 * @brief Simplest leak by realloc.
 */
