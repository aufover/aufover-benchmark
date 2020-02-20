#include <stdlib.h>

int main(void)
{
    char *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    char ch = *ptr1; /* error */
    (void) ch;

    free(ptr2);
}

/**
 * @file 0061-test.c
 *
 * @brief Incorrect usage of realloc'd memory after free.
 */
