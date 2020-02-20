#include <stdlib.h>

#define REALLOC(X)                                 \
    do {                                           \
        void *ptr = (X);                           \
        if (ptr == NULL)                           \
            return EXIT_SUCCESS;                   \
                                                   \
        void *newptr = realloc(ptr, sizeof(char)); \
        if (newptr == NULL) {                      \
            free(ptr);                             \
            return EXIT_SUCCESS;                   \
        }                                          \
                                                   \
        free(newptr);                              \
    } while(0)

int main(void)
{
    REALLOC(malloc(sizeof(char)));
    REALLOC(calloc(1, sizeof(char)));
    REALLOC(realloc(NULL, sizeof(char)));

    void *ptr = malloc(sizeof(char));
    if (ptr == NULL)
        return EXIT_SUCCESS;

    void *ptr1 = realloc(ptr, sizeof(char));
    if (ptr1 == NULL) {
        free(ptr);
        return EXIT_SUCCESS;
    }

    REALLOC(ptr1);
}

/**
 * @file 0046-test.c
 *
 * @brief Correct realloc without size change.
 */
