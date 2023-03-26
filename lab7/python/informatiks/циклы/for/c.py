a = int(input())
b = int(input())

def isK(a):
    for i in range(2, int(a/2)+1):
        if i*i == a:
            return True
    return False

for i in range(a, b+1):
    if(isK(i)):
        print(i)