#include <string.h>

int main(void)
{
    char str1[5];
    memmove(str1, str1 + 1, 2);
}

/**
 * @file test-0009.c
 *
 * @brief a correct usage of memmove on overlapping memory
 */
