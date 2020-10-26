import sys
input = sys.stdin.readline


def dfs(curr):
    global answer
    answer += 1
    for dest in graph[curr]:
        if(visited[dest] == 0):
            visited[dest] = 1
            dfs(dest)


answer, graph, visited = None, None, None
answers = []
T = int(input().rstrip())
for _ in range(T):
    answer = 0
    n, m = map(int, input().rstrip().split(" "))
    graph = [[] for _ in range(n+1)]
    visited = [0]*(n+1)
    for _ in range(m):
        start, end = map(int, input().rstrip().split(" "))
        graph[start].append(end)
        graph[end].append(start)
    visited[1] = 1
    dfs(1)
    answers.append(answer)

for a in answers:
    print(a-1)
