#include <stdlib.h>

int main(void)
{
    void *ptr = realloc(NULL, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    void *newptr = realloc(ptr, 2 * sizeof(char));
    if (newptr == NULL) {
        free(ptr);
        return EXIT_SUCCESS;
    }

    /* leak */
}

/**
 * @file 0040-test.c
 *
 * @brief Leak of realloc'd memory.
 */
