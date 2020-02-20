#include <stdlib.h>

int main(void)
{
    char *ptr = calloc(1, sizeof(char));
    if (ptr == NULL) {
        *ptr = 'A'; /* error */
        return EXIT_SUCCESS;
    }

    free(ptr);
}

/**
 * @file 0006-test.c
 *
 * @brief Usage of pointer after calloc failure.
 */
