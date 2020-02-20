#include <errno.h>
#include <stdlib.h>

int main(void)
{
    void *ptr1 = malloc(sizeof(char));
    if (ptr1 == NULL)
        return EXIT_SUCCESS;

    void *ptr2 = realloc(ptr1, 2 * sizeof(char));
    if (ptr2 == NULL) {
        free(ptr1);
        return EXIT_SUCCESS;
    }

    errno = 0;
    void *ptr3 = realloc(ptr2, 0);
    if (ptr3 == NULL) {
        /* if realloc fails, it returns NULL and sets ENOMEM */
        if (errno == ENOMEM)
            free(ptr2);

        return EXIT_SUCCESS;
    }

    /* leak */
}

/**
 * @file 0079-test.c
 *
 * @brief Possible leak of realloc'd memory with 0 size.
 */
