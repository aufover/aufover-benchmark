#include <stdlib.h>

int main(void)
{
    char *ptr = realloc(NULL, sizeof(char));
    *ptr = 'A'; /* error */
    free(ptr);
}

/**
 * @filename 0005-test.c
 *
 * @brief Usage of pointer after possible realloc as malloc failure.
 */
