n = int(input())
ok = True
i = 2
while ok:
    if n % i==0:
        ok = False
        print(i)
        break
    i+=1
