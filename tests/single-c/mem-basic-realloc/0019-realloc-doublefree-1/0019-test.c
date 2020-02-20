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

    free(newptr);
    free(newptr); /* invalid free */
}

/**
 * @file 0019-test.c
 *
 * @brief Double free of realloc'd memory.
 */
