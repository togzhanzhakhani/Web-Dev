x = int(input())
d = int(input())
k = 0
while x >=1:
    if x%10 == d:
        k += 1
    x = int(x/10)
print(k)
