import sys
import heapq
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))
graph = dict()
for i in range(1, n+1):
    graph[i] = []
inDegree = [0]*(n+1)
inDegree[0] = -1  # 1부터 시작
for _ in range(m):
    start, end = map(int, input().rstrip().split(" "))
    graph[start].append(end)
    inDegree[end] += 1


q = []
for i in range(n+1):
    if(inDegree[i] == 0):
        heapq.heappush(q, i)
        inDegree[i] -= 1

ans = []
while(len(q) != 0):
    i = heapq.heappop(q)
    ans.append(i)

    for j in graph[i]:
        inDegree[j] -= 1
        if(inDegree[j] == 0):
            heapq.heappush(q, j)
            inDegree[j] -= 1


print(" ".join(map(str, ans)))
