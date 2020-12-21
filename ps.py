import sys
import heapq
INF = 1e9
input = sys.stdin.readline
a, b = map(int, input().rstrip().split())
n, m = map(int, input().rstrip().split())
adj = [[] for _ in range(n + 1)]
distance = [INF] * (n + 1)
visited = [False] * (n + 1)
for _ in range(m):
    c1, c2 = map(int, input().rstrip().split())
    adj[c1].append(c2)
    adj[c2].append(c1)


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    visited[start] = True
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in adj[now]:
            cost = dist + 1
            if cost < distance[i]:
                distance[i] = cost
                heapq.heappush(q, (cost, i))


dijkstra(a)
if distance[b] == INF:
    print(-1)
else:
    print(distance[b])
