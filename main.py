import sys
input = sys.stdin.readline

n,m = map(int, input().rstrip().split(" "))
INF = int(1e9)
graph = [ [INF] * (n+1) for _ in range(n+1) ]
for _ in range(m):
  a,b = list(map(int,input().rstrip().split(" ") ))
  
  graph[a][b] = 1
  graph[b][a] = 1


for k in range(1, n+1):
  for i in range(1, n+1):
    for j in range(1, n+1):
      graph[i][j] = min([ graph[i][j], graph[i][k]+graph[k][j] ])


# for i in range(1,n+1):
#   for j in range(1, n+1):
#     if(i==j):
#         graph[i][j] = 0
#     if(graph[i][j] == INF):
#       graph[i][j] = 0
#   print(" ".join( map(str, graph[i][1:]) ) )
# for i in range(1,n+1):
#   print(sum(graph[i][1:]))

ans = []
for i in range(1, n+1):
  tmp = 0
  for j in range(1, n+1):
    if(i==j):
      graph[i][j] = 0
    if( graph[i][j] != INF ):
      tmp += graph[i][j]
  ans.append( (i, tmp) )

print( sorted(ans, key=lambda x:(-x[1], -x[0]))[-1][0] )
