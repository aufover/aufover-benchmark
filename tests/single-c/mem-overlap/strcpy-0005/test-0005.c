#include <assert.h>
#include <string.h>

int main(void)
{
    char str1[] = "test";
    char str2[5];
    assert(strcpy(str2, str1) == str2);
}

/**
 * @file test-0005.c
 *
 * @brief a correct usage of strcpy
 */
