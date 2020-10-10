import sys
input = sys.stdin.readline

n = int(input().rstrip())
m = int(input().rstrip())
graph = dict()
for i in range(1, n+1):
    graph[i] = []

for _ in range(m):
    a, b = map(int, input().rstrip().split(" "))
    graph[a].append(b)
    graph[b].append(a)

visited = [0] * (n+1)


def dfs(graph, v, visited):
    # 현재노드 방문처리
    visited[v] = 1
    # 현재노드와 인접한 다른 노드 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)


dfs(graph, 1, visited)

print(sum(visited[1:])-1)
