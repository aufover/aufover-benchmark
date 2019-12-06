#include <string.h>

int main(void)
{
    char str[] = "test";
    strncpy(str, str + 1, 2);
}
