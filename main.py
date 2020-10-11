# 최소힙
import heapq
import sys
input = sys.stdin.readline

q = []

n = int(input().rstrip())
answer = []
for _ in range(n):
    x = int(input().rstrip())

    if(x == 0):
        if(len(q) == 0):
            answer.append(0)
        else:
            answer.append(heapq.heappop(q))
    else:
        heapq.heappush(q, x)

for a in answer:
    print(a)


# 최대힙
import heapq
import sys
input = sys.stdin.readline

q = []

n = int(input().rstrip())
answer = []
for _ in range(n):
    x = int(input().rstrip())

    if(x == 0):
        if(len(q) == 0):
            answer.append(0)
        else:
            answer.append(-1*heapq.heappop(q))
    else:
        heapq.heappush(q, -1*x)

for a in answer:
    print(a)
