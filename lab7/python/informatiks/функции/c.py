def str(s, kol):
    if len(s) == 0:
        return kol
    elif s[0].isdigit():
        kol += 1
    return str(s[1::], kol)


print(str(input(), kol=0))