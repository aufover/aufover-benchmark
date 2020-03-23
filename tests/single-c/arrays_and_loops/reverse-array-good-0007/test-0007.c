#include <stdlib.h>
extern int __VERIFIER_nondet_int(void);
extern char __VERIFIER_nondet_char(void);

int main()
{
    int length = 8;
    int *array = alloca(length * sizeof(int));

    for (int i = 0; i < length; i++) {
        array[i] = __VERIFIER_nondet_int();
    }

    for (int i = 0; i < length; i++) {
        if (array[i] == '\0')
            array[i]++;
    }
    array[length / 2 + 1] = '\0';
    int *a = array;
    int *b = array + length - 1;
    int tmp;
    while (*a != 0 && *b != 0) {
        tmp = *a;
        *a = *b;
        *b = tmp;
        a++;
        b--;
    }
    return 0;
}
