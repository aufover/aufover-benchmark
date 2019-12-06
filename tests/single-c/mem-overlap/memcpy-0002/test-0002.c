#include <string.h>

int main(void)
{
    char arr[5];
    memcpy(arr, arr + 1, 2);
}

/**
 * @file test-0002.c
 *
 * @brief the copied memory overlaps, verifiers should show an error
 */
