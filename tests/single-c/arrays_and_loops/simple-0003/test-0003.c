#include <assert.h>
#define N 10

int main(void)
{
    int array[N] = { 1 };
    int i;

    array[N - 1] = 0;

    for (i = 0; array[i] != 0; i++) {/*noop*/}

    assert(i <= N);
}
