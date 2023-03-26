def stroka(s, maximum):
    if len(s) == 0:
        return maximum
    maximum = max(maximum, int(s[0]))
    return stroka(s[1::], maximum)


print(stroka(input(), maximum=0))