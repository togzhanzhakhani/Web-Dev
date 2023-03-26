x = int(input())
k = 0
while x >=1:
    k += x%10
    x = int(x/10)
print(k)