#include <stdlib.h>

int main(void)
{
    void *ptr1 = realloc(NULL, sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        *ptr2 = 'A'; /* error */

        free(ptr1);
        return EXIT_SUCCESS;
    }

    free(ptr2);
}

/**
 * @file 0053-test.c
 *
 * @brief Usage of pointer after possible realloc failure.
 */
