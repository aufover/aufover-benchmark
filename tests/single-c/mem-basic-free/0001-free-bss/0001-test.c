#include <stdlib.h>

int a[10];

int main(void)
{
    free(a); /* invalid free */
}

/**
 * @file 0001-test.c
 *
 * @brief Invalid free of a global uninitialised memory.
 */
