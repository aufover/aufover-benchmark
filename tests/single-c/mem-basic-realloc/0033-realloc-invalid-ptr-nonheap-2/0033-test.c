#include <stdlib.h>

int main(void)
{
    void *ptr = realloc("test", sizeof(char)); /* error */
}

/**
 * @file 0033-test.c
 *
 * @brief Realloc of non-heap memory.
 */
