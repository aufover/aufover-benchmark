#include <stdlib.h>

int main(void)
{
    free(NULL);
}

/**
 * @file 0003-test.c
 *
 * @brief Free of NULL is a noop.
 */
