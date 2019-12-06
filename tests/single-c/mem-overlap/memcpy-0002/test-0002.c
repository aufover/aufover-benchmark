#include <string.h>

int main(void)
{
    char arr[5];
    memcpy(arr, arr + 1, 2);
}
