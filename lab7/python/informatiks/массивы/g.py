n = int(input())
a = []
a = list(map(int, input().split()))

k = 0
ok = True
for i in range(n):
    print(a[n-1 - i], end=" ")