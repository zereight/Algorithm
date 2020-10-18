import sys
from collections import deque
import bisect
input = sys.stdin.readline

n, m, k, x = map(int, input().rstrip().split(" "))
graph = dict()
for i in range(1, n+1):
    graph[i] = []
for _ in range(m):
    start, end = map(int, input().rstrip().split(" "))
    graph[start].append(end)

visited = [-1]*(n+1)

curr = x
q = deque()
q.append(curr)
distance = 1
visited[curr] = 0
answer = []

while(len(q) != 0):
    curr = q.popleft()
    if(visited[curr] == k):
        break
    # print(curr)
    for dest in graph[curr]:
        if(visited[dest] == -1):
            q.append(dest)
            visited[dest] = visited[curr]+1
            if(visited[curr]+1 == k):
                bisect.insort(answer, dest)


if(len(answer) != 0):
    for i in answer:
        print(i)
else:
    print(-1)
