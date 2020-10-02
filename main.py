import sys
input = sys.stdin.readline

import heapq

T = int(input())

INF = int(1e9)

def countHacked(arr):
  return len(list(filter(lambda x: x!=-1, arr)))

answer = []

for _ in range(T):
  n,d,start = map(int, input().rstrip().split(" "))
  info = dict()
  visited = [0] * (1+n)
  distance = [INF] * (1+n)

  for i in range(1, n+1):
    info[i] = []
  
  for __ in range(d):
    b,a,s = map(int, input().rstrip().split(" "))
    info[a].append( (b,s) )
  

  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0
  
  while( len(q) != 0 ):
    weight, curr = heapq.heappop(q)
    visited[curr] = 1
    
    for i in info[curr]:
      dest, cost = i
      if( visited[dest] == 0 ):
        if( distance[dest] > weight + cost):
          distance[dest] = weight+cost
          heapq.heappush(q, (distance[dest], dest))
  
  for i in range(len(distance)):
    if(distance[i] == INF):
      distance[i] = -1
  
  answer.append( (countHacked(distance), max(distance) ))

for i in answer:
  print(" ".join(map(str, i)))
