#include <assert.h>
#include <errno.h>
#include <stdlib.h>

#define REALLOC_FROM_ZEROSIZE(X)                  \
    do {                                          \
        errno = 0;                                \
                                                  \
        void *ptr1 = (X);                         \
        if (ptr1 == NULL)                         \
            return EXIT_SUCCESS;                  \
                                                  \
        assert(errno == 0);                       \
                                                  \
        void *ptr2 = realloc(ptr1, sizeof(char)); \
        if (ptr2 == NULL) {                       \
            assert(errno == ENOMEM);              \
            free(ptr1);                           \
                                                  \
            return EXIT_SUCCESS;                  \
        }                                         \
                                                  \
        assert(errno == 0);                       \
        free(ptr2);                               \
        assert(errno == 0);                       \
    } while(0);

int main(void)
{
    REALLOC_FROM_ZEROSIZE(malloc(0));
    REALLOC_FROM_ZEROSIZE(calloc(0, sizeof(char)));
    REALLOC_FROM_ZEROSIZE(calloc(1, 0));
    REALLOC_FROM_ZEROSIZE(calloc(0, 0));
    REALLOC_FROM_ZEROSIZE(realloc(NULL, 0));
}

/**
 * @file 0027-test.c
 *
 * @brief Correct usage of realloc with zero-size memory.
 */
