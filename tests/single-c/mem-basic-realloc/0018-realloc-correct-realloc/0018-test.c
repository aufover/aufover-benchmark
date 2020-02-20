#include <assert.h>
#include <errno.h>
#include <stdlib.h>

#define REALLOC(X)                                     \
    do {                                               \
        errno = 0;                                     \
        void *ptr = (X);                               \
        if (ptr == NULL)                               \
            return EXIT_SUCCESS;                       \
                                                       \
        assert(errno == 0);                            \
        void *newptr = realloc(ptr, 3 * sizeof(char)); \
        if (newptr == NULL) {                          \
            assert(errno == ENOMEM);                   \
            free(ptr);                                 \
            return EXIT_SUCCESS;                       \
        }                                              \
                                                       \
        assert(errno == 0);                            \
        free(newptr);                                  \
        assert(errno == 0);                            \
    } while(0)

int main(void)
{
    REALLOC(malloc(sizeof(char)));
    REALLOC(calloc(1, sizeof(char)));
    REALLOC(realloc(NULL, sizeof(char)));

    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    void *ptr1 = realloc(ptr, 2 * sizeof(char));
    if (ptr1 == NULL) {
        free(ptr);
        return EXIT_SUCCESS;
    }

    REALLOC(ptr1);
}

/**
 * @file 0018-test.c
 *
 * @brief Correct usage of realloc.
 */
