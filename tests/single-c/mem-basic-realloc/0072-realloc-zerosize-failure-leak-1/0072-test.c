#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 0);
    if (ptr2 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        return EXIT_SUCCESS; /* possible leak */
    }

    free(ptr2);
}

/**
 * @file 0072-test.c
 *
 * @brief Leak of original memory after realloc of memory with 0 size failed.
 */
