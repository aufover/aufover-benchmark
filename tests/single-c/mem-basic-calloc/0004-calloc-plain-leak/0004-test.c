#include <stdlib.h>

int main(void)
{
    calloc(1, sizeof(char)); /* leak */
}

/**
 * @file 0004-test.c
 *
 * @brief Simplest leak by calloc.
 */
