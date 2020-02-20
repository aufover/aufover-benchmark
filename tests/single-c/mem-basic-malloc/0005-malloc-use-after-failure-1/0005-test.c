#include <stdlib.h>

int main(void)
{
    char *ptr = malloc(sizeof(char));
    *ptr = 'A'; /* error */
    free(ptr);
}

/**
 * @filename 0005-test.c
 *
 * @brief Usage of pointer after possible malloc failure.
 */
