#include <stdlib.h>

int a[10];

int main(void)
{
    void *ptr = realloc(a, sizeof(char)); /* error */
}

/**
 * @file 0034-test.c
 *
 * @brief Realloc of non-heap memory.
 */
