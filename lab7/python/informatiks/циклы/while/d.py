n = int(input())

def isS(a):
    if a == 1:
        return True
    a = 1
    while a <= n:
        a = a*2
        if a == n:
            return True
        if a > n:
            return False

if isS(n):
    print("YES")
else:
    print("NO")