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

    void *ptr3 = realloc(ptr2, 3 * sizeof(char));
    if (ptr3 == NULL) {
        free(ptr2);
        return EXIT_SUCCESS;
    }

    /* leak */
}

/**
 * @file 0041-test.c
 *
 * @brief Leak of realloc'd memory.
 */
