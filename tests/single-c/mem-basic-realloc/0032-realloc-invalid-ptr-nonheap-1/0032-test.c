#include <stdlib.h>

int main(void)
{
    int a;
    void *ptr = realloc(&a, sizeof(char)); /* error */
}

/**
 * @file 0032-test.c
 *
 * @brief Realloc of non-heap memory.
 */
