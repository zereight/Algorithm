import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = map(int, input().rstrip().split(" "))

graph = dict()
for i in range(1, 1+n):
    graph[i] = []

for _ in range(m):
    a, b = map(int, input().rstrip().split(" "))
    graph[a].append(b)
    graph[b].append(a)

visited = [0]*(1+n)


def dfs(graph, visited, start, marking):
    visited[start] = marking
    for g in graph[start]:
        if(visited[g] == 0):
            dfs(graph, visited, g, marking)


marking = 1
for i in range(1, n+1):
    if(visited[i] == 0):
        dfs(graph, visited, i, marking)
    marking += 1

print(len(set(visited[1:])))
