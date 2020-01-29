#include <stdlib.h>

extern int __VERIFIER_nondet_int(void);
extern char __VERIFIER_nondet_char(void);

int strlen_rec(const char *p)
{
    if (*p == '\0')
        return 0;
    else
        return 1 + strlen_rec(p + 1);
}

int main()
{
    int length = 100;

    char *nondet_string = (char *) alloca(length * sizeof(char));

    for (int i = 0; i < length - 1; i++) {
        nondet_string[i] = __VERIFIER_nondet_char();
    }

    nondet_string[length - 1] = '\0';
    strlen_rec(nondet_string);
}
