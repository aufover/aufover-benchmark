#include <stdlib.h>

extern int __VERIFIER_nondet_int(void);

int main() {
    void **undef;
    void **null_value = NULL;

    if (__VERIFIER_nondet_int())
        null_value = *undef;

    void **err = *null_value;

    return 0;
}

/**
 * @file test-0002.c
 *
 * @brief invalid dereference
 *
 * - NULL value
 * - an uninitialized value
 */
