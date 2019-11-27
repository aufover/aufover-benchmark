//#include <verifier-builtins.h>
#include <stdlib.h>
int main()
{
    void *mem = malloc(sizeof(mem));
    void **ok = mem;

    mem = malloc(sizeof(mem));
    char *warn = mem;

    mem = malloc(sizeof(char));
    void **err = mem;

    //__VERIFIER_plot(NULL);
    *err = NULL;

    return 0;
}

/**
 * @file test-0009.c
 *
 * @brief checking of size of allocated memory (the easiest case)
 */
