n = int(input())
a = 1
i = 1
while a<=n:
    a = i*i
    if a>n:
        break
    print(a)
    i+=1

