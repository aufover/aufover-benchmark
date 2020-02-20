#include <stdlib.h>

int main(void)
{
    char *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    void *ptr3 = realloc(ptr2, 3 * sizeof(char));
    if (ptr3 == NULL) {
        free(ptr2);

        *ptr2 = 'A'; /* error */

        return EXIT_SUCCESS;
    }

    free(ptr3);
}

/**
 * @file 0016-test.c
 *
 * @brief Usage of original memory after free after failure of realloc.
 */
