def check(n):
    m = n - 1
    if m % 5 == 0:
        return True
    while m > 0:
        if m % 3 == 0:
            return True
        m -= 5
    return False


n = int(input())
if check(n):
    print("YES")
else:
    print("NO")
