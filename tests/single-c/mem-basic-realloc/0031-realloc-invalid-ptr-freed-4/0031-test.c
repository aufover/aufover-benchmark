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

    free(ptr2);
    void *ptr3 = realloc(ptr2, 3 * sizeof(char)); /* error */
}

/**
 * @file 0031-test.c
 *
 * @brief Realloc of an invalid pointer.
 */
