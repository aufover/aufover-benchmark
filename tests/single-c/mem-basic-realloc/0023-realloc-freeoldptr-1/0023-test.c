#include <stdlib.h>

int main(void)
{
    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    void *newptr = realloc(ptr, 2 * sizeof(char));
    if (newptr == NULL) {
        free(ptr);
        return EXIT_SUCCESS;
    }

    free(ptr); /* invalid free */
    free(newptr);
}

/**
 * @file 0023-test.c
 *
 * @brief Invalid free of previous pointer after successful realloc.
 */
