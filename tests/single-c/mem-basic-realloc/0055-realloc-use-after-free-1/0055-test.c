#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    free(ptr2);

    char ch = *ptr2; /* error */
    (void) ptr2;
}

/**
 * @file 0055-test.c
 *
 * @brief Incorrect usage of realloc'd memory after free.
 */
