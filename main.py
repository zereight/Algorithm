import sys
from collections import deque
input = sys.stdin.readline
n = int(input().rstrip())

l = deque()

for _ in range(n):
    l.append([*map(int, input().rstrip().split(" "))])

l = sorted(l, key=lambda x: (x[0], x[1]))

for i in l:
    print(" ".join(map(str, i)))
