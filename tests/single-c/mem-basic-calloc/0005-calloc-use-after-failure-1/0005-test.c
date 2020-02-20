#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, sizeof(char));
    *ptr = 'A'; /* error */
    free(ptr);
}

/**
 * @file 0005-test.c
 *
 * @brief Usage of a possibly NULL pointer after calloc.
 */
