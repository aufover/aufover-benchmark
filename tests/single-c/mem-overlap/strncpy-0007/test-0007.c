#include <string.h>

int main(void)
{
    char str1[] = "test";
    char str2[5];
    strncpy(str2, str1, 5);
}

/**
 * @file test-0007.c
 *
 * @brief a correct usage of strncpy
 */
