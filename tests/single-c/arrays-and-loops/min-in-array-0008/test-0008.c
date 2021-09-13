#include <assert.h>
extern int __VERIFIER_nondet_int(void);

#define N 4

int main(void)
{
    int array[N];
    int min = 0;

    for (int j = 0; j < N; j++) {
        array[j] = __VERIFIER_nondet_int();
    }

    int i = 0;

    while (i < N) {
        if (array[i] < min) {
            min = array[i];
        }
        i = i + 1;
    }

    int x;
    for (x = 0; x < N; x++) {
        assert(array[x] >= min);
    }
    return 0;
}
