# pypy3로 제출할것.
import sys
import copy
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().rstrip().split(" "))
    graph[b].append(a)


def bfs(x):
    global graph, n

    q = deque()
    q.append(x)
    visited = [0] * (n+1)
    visited[x] = 1
    count = 0

    while(len(q) != 0):
        start = q.popleft()
        count += 1
        for dest in graph[start]:
            if(visited[dest] == 0):
                q.append(dest)
                visited[dest] = 1

    return count


maximum = -1
maximum_idx = []
for i in range(1, n+1):
    if(len(graph[i]) > 0):
        tmp = bfs(i)
        if(tmp > maximum):
            maximum = tmp
            maximum_idx = [i]
        elif(tmp == maximum):
            maximum_idx.append(i)

print(*maximum_idx)
