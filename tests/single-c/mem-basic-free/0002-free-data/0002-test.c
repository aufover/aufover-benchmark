#include <stdlib.h>

int a[10] = { 42 };

int main(void)
{
    free(a); /* invalid free */
}

/**
 * @file 0002-test.c
 *
 * @brief Invalid free of an initialised global memory.
 */
