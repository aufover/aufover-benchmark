#include <stdlib.h>

int main(void)
{
    int a;
    free(&a); /* invalid free */
}

/*
 * @file 0006-test.c
 *
 * @brief Invalid free of a stack memory.
 */
