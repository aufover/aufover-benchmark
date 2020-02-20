#include <stdlib.h>

int main(void)
{
    free(main); /* invalid free */
}

/**
 * @file 0007-test.c
 *
 * @brief Invalid free of an addresses in the text section.
 */
