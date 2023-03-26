n = int(input())
a = []
a = list(map(int, input().split()))

k = 0
ok = True
for i in range(1, n):
    if (a[i] > 0 and a[i-1] > 0) or (a[i] < 0 and a[i-1] < 0):
        print("YES")
        ok = False
if ok:
    print("NO")