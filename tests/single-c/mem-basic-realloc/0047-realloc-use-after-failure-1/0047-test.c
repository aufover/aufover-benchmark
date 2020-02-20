#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    char *ptr2 = realloc(ptr1, 2 * sizeof(char));
    *ptr2 = 'A'; /* error */

    free(ptr2 != NULL ? ptr2 : ptr1);
}

/**
 * @file 0047-test.c
 *
 * @brief Usage of pointer after possible realloc failure.
 */
