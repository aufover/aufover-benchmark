#include <assert.h>
#include <stdlib.h>

#define CHECK(X)                                     \
    do {                                             \
        char *ptr = (X);                             \
        if (ptr == NULL)                             \
            return EXIT_SUCCESS;                     \
                                                     \
        void *ptr1 = realloc(ptr, 2 * sizeof(char)); \
        if (ptr1 == NULL) {                          \
            *ptr = 'A';                              \
            assert(*ptr == 'A');                     \
                                                     \
            free(ptr);                               \
            return EXIT_SUCCESS;                     \
        }                                            \
                                                     \
        free(ptr1);                                  \
    } while(0);                                      \


int main(void)
{
    CHECK(malloc(sizeof(char)));
    CHECK(calloc(1, sizeof(char)));
    CHECK(realloc(NULL, sizeof(char)));

    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    void *ptr1 = realloc(ptr, 2 * sizeof(char));
    if (ptr1 == NULL) {
        free(ptr);
        return EXIT_SUCCESS;
    }

    CHECK(ptr1);
}

/**
 * @file 0017-test.c
 *
 * @brief Correct usage of original memory after failure of realloc.
 */
