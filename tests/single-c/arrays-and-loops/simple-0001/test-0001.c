#include <assert.h>
#define SIZE 100

int main(void)
{
    int array_A[SIZE] = { 0 };
    int array_B[SIZE];
    int i;
    int tmp;

    for (i = 0; i < SIZE; i++) {
        tmp = array_A[i];
        array_B[i] = tmp;
    }

    assert(array_A[5] != array_B[5]);
}
