#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    free(ptr);

    *ptr = 'A'; /* error */
}

/**
 * @file 0007-test.c
 *
 * @brief Use after free of a calloc'd value.
 */
