#include <assert.h>
extern int __VERIFIER_nondet_int();

#define N 10
int main()
{
    int array[N];

    for (int i = 0; i < N; i++) {
        array[i] = __VERIFIER_nondet_int();
    }

    int a = 0;
    while (array[a] >= 0) {
        a++;
        if (a >= N)
            break;
    }

    for (int x = 0; x < a; x++) {
        assert(array[x] >= 0);
    }
    return 0;
}
