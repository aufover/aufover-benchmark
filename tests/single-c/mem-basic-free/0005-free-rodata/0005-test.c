#include <stdlib.h>

int main(void)
{
    free("test"); /* invalid free */
}

/**
 * @file 0005-test.c
 *
 * @brief Invalid free of a read-only global.
 */
