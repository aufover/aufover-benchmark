#include <stdlib.h>

int main(void)
{
    char *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    free(ptr);

    *ptr = 'A'; /* error */
}

/**
 * @filename 0007-test.c
 *
 * @brief Use-after-free of a malloc'd value.
 */
