#include <string.h>

int main(void)
{
    char str[] = "test";
    strncpy(str, str + 1, 2);
}

/**
 * @file test-0008.c
 *
 * @brief the copied memory overlaps, verifiers should show an error
 */
