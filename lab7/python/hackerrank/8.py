import numpy
numpy.set_printoptions(legacy='1.13')

n, m = input().split()

print(numpy.eye(int(n), int(m), k = 0))