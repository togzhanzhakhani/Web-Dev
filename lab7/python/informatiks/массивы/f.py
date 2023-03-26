n = int(input())
a = []
a = list(map(int, input().split()))

k = 0
ok = True
for i in range(1, n-1):
    if a[i] > a[i-1] and a[i] > a[i+1]:
        k += 1

print(k)