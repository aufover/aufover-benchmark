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

    void *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        return EXIT_SUCCESS; /* possible leak */
    }

    free(ptr3);
}

/**
 * @file 0075-test.c
 *
 * @brief Leak of original memory after realloc of memory with 0 size failed.
 */
