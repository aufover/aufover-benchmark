#include <string.h>

int main(void)
{
    char str[] = "test";
    strcpy(str, str + 1);
}

/**
 * @file test-0006.c
 *
 * @brief the copied memory overlaps, verifiers should
 *        show an error
 */
