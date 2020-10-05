import sys
input = sys.stdin.readline

n = int(input().rstrip())
answer = 0
info = []
for i in range(n):
  x,y,z = map(int, input().rstrip().split(" "))
  info.append( (x,y,z,i+1) )

graph = []
# 부모 리스트
parents = [0] * (n+1)

# 부모를 자기자신으로 초기화
for i in range(n+1):
  parents[i]=i

# 최종 부모노드를 찾는 함수
def get_root_node(x):
  global parents
  if( parents[x] != x ):
    parents[x] = get_root_node(parents[x])
  return parents[x]

# union
def union(a,b):
  global parents
  a = get_root_node(a)
  b = get_root_node(b)
  if(a<b):
    parents[b] = a
  else:
    parents[a] = b

info = sorted(info, key=lambda x: x[0])
for i in range(0,n-1):
  graph.append( (info[i][3], info[i+1][3], abs(info[i][0] - info[i+1][0]) ) )
info = sorted(info, key=lambda x: x[1])
for i in range(0,n-1):
  graph.append( (info[i][3], info[i+1][3], abs(info[i][1] - info[i+1][1]) ))
info = sorted(info, key=lambda x: x[2])
for i in range(0,n-1):
  graph.append( (info[i][3], info[i+1][3], abs(info[i][2] - info[i+1][2]) ) )

graph = sorted(graph, key=lambda x:x[2])

for edge in graph:
  a,b,c = edge
  if( get_root_node(a) != get_root_node(b) ):
    union(a,b)
    answer+=c
print(answer)
