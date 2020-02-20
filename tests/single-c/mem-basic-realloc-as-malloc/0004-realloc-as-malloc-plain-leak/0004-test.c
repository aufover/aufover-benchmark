#include <stdlib.h>

int main(void)
{
    realloc(NULL, sizeof(char)); /* leak */
}

/**
 * @file 0004-test.c
 *
 * @brief Simplest leak by realloc as malloc.
 */
