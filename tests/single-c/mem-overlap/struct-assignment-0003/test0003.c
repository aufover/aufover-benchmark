struct test {
    char c;
};

int main(void)
{
    struct test a;
    struct test b;

    a = b;
}

/**
 * @file test-0003.c
 *
 * @brief struct assignment is permitted by the standard
 */
