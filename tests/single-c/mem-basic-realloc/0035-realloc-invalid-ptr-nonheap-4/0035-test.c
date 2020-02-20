#include <stdlib.h>

int main(void)
{
    void *ptr = realloc(main, sizeof(char)); /* error */
}

/**
 * @file 0035-test.c
 *
 * @brief Realloc of non-heap memory.
 */
