#include <stdlib.h>

int main(void)
{
    char *ptr = malloc(sizeof(char));
    if (ptr == NULL) {
        *ptr = 'A'; /* error */
        return EXIT_SUCCESS;
    }

    free(ptr);
}

/**
 * @filename 0006-test.c
 *
 * @brief Usage of pointer after malloc failure.
 */
