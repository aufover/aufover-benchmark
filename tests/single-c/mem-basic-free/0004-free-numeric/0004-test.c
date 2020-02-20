#include <stdlib.h>

int main(void)
{
    free((void *) 0xDEAD); /* invalid free */
}

/**
 * @file 0004-test.c
 *
 * @brief Invalid free of an addresses described by a numeric constant.
 */
