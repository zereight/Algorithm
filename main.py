import sys
input = sys.stdin.readline

n = int(input().rstrip())
m = int(input().rstrip())
INF = int(1e9)
graph = [ [INF]*(n+1) for _ in range(n+1) ]
for _ in range(m):
    start, end, weight = map(int, input().rstrip().split(" "))
    graph[start][end] = min(weight,graph[start][end])

for k in range(1,n+1):
    for i in range(1,n+1):
        for j in range(1,n+1):
            graph[i][j] = min( graph[i][j], graph[i][k]+graph[k][j] )

for i in range(n+1):
    graph[i][i] = 0
    for j in range(n+1):
        if(graph[i][j] == INF):
            graph[i][j] = 0

for i in graph[1:]:
    print(" ".join(map(str,i[1:])))
