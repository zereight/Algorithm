import sys
input = sys.stdin.readline

n,m = map(int, input().rstrip().split(" "))

graph = []
for _ in range(m):
  a,b,c = map(int, input().rstrip().split(" "))
  graph.append( (a,b,c) )

parents = [0] * (n+1)

# 자기자신으로 부모노드 초기화
for i in range(n+1):
  parents[i] = i

# 가중치 기반 정렬
graph = sorted(graph, key=lambda x:x[2])

# 최종 루트노드를 찾기
def find_root_node(parents, x):
  if( parents[x] != x ):
    parents[x] = find_root_node(parents, parents[x])
  return parents[x]

# Union
def union(parents, a,b):
  a=find_root_node(parents,a)
  b=find_root_node(parents,b)
  if(a<b):
    parents[b] = a
  else:
    parents[a] = b
  
answer = 0
# 최소 스패닝 트리만든다음에 스패닝트리에서 가장 가중치 큰 간선빼면 2개의 마을로 분할됨
maxium_edge_weight_in_spanninTree = 0
for edge in graph:
  a,b,c = edge
  if(find_root_node(parents,a) != find_root_node(parents,b)):
    union(parents, a,b)
    if( maxium_edge_weight_in_spanninTree < c):
      maxium_edge_weight_in_spanninTree=c
    answer+=c
print(answer - maxium_edge_weight_in_spanninTree)
