#include <stdlib.h>

int a = 5;

int main(void)
{
    void *ptr = realloc(&a, sizeof(char)); /* error */
}

/**
 * @file 0036-test.c
 *
 * @brief Realloc of non-heap memory.
 */
