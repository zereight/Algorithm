import sys
input = sys.stdin.readline

v,e = map(int, input().rstrip().split(" "))
graph = []
for _ in range(e):
  a,b,c = map(int, input().rstrip().split(" "))
  graph.append( (a,b,c) )

graph = sorted(graph, key= lambda x:x[2])

# 부모노드 저장 리스트
parents = [0] * (v+1)

# parent 를 자기자신으로 설정
for i in range(v+1):
  parents[i] = i

# 최종 루트노드를 찾는 함수
def find_parent(parent, x):
  if(parent[x] != x):
    parent[x] = find_parent(parent, parent[x])
  return parent[x]

# union, 숫자가 더 적은것을 부모처리
def union(parent, a, b):
  a = find_parent(parent, a)
  b= find_parent(parent,b)
  if(a<b):
    parent[b] = a
  else:
    parent[a] = b


answer = 0
for edge in graph:
  a,b,c = edge
  # 최종 부모가 다르면
  if(find_parent(parents,a) != find_parent(parents,b)):
    union(parents, a, b) # union
    answer+=c

print(answer)
