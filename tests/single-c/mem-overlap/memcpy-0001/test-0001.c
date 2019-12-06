#include <assert.h>
#include <string.h>

int main(void)
{
    char arr1[5];
    char arr2[5];
    assert(memcpy(arr1, arr2, 5) == arr1);
}

/**
 * @file test-0001.c
 *
 * @brief a correct usage of memcpy
 */
