#include <stdlib.h>

int main(void)
{
    malloc(sizeof(char)); /* leak */
}

/**
 * @file 0004-test.c
 *
 * @brief Simplest leak by malloc.
 */
