#include <string.h>

int main(void)
{
    char str[] = "test";
    strcpy(str, str + 1);
}
