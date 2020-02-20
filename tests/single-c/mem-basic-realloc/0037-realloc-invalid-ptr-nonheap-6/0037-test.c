#include <stdlib.h>

int main(void)
{
    void *ptr = realloc((void *) 0xDEAD, sizeof(char)); /* error */
}

/**
 * @file 0037-test.c
 *
 * @brief Realloc of non-heap memory.
 */
