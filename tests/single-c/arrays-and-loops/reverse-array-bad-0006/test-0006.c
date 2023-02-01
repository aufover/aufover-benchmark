#include <stdlib.h>
extern int __VERIFIER_nondet_int(void);
extern char __VERIFIER_nondet_char(void);

int main(void)
{
    int length = 99;

    int *arr = alloca(length); // alocates only 99 bytes

    for (int i = 0; i < length; i++) {
        arr[i] = __VERIFIER_nondet_int(); // sizeof(int)==4 && i==24 -> writes 1 byte outside of the allocated memory
    }

    for (int i = 0; i < length; i++) {
        if (arr[i] == '\0')
            arr[i]++;
    }

    arr[length / 2 + 1] = '\0';
    int *a = arr;
    int *b = arr + length - 1;
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
