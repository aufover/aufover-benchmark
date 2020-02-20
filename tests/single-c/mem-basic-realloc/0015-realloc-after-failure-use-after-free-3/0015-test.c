#include <stdlib.h>

int main(void)
{
    char *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);

        *ptr1 = 'A'; /* error */

        return EXIT_SUCCESS;
    }

    free(ptr2);
}

/**
 * @file 0015-test.c
 *
 * @brief Usage of original memory after free after failure of realloc.
 */
