int main(void)
{
    struct {
    	char c;
    } a;
    a = a;
}

/**
 * @file test-0004.c
 *
 * @brief struct self-assignment is permitted by the standard
 */
