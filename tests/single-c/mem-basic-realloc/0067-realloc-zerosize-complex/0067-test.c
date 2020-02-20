#include <errno.h>
#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 0);
    if (ptr2 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr1);

        return EXIT_SUCCESS;
    }

    void *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr2);

        return EXIT_SUCCESS;
    }

    char *ptr4 = realloc(ptr3, sizeof(char));
    if (ptr3 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr3);

        return EXIT_SUCCESS;
    }

    *ptr4 = 'A';
    (void) ptr4;

    free(ptr4);
}

/**
 * @file 0067-test.c
 *
 * @brief Correct complex usage of realloc with zero size.
 */
