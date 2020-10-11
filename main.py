import sys
import heapq
input = sys.stdin.readline
n = int(input().rstrip())
q = []
for _ in range(n):
    q.extend(list(map(int, input().rstrip().split(" "))))
    q = heapq.nlargest(n, q)
print(q[-1])
