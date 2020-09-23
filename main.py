'''
미로는 N*M 크기이며, 
미로는 빈 방 또는 벽으로 이루어져 있고, 빈 방은 자유롭게 다닐 수 있지만, 
벽은 부수지 않으면 이동할 수 없다.

알고스팟 운영진은 여러명이지만, 항상 모두 같은 방에 있어야 한다. 즉, 여러 명이 다른 방에 있을 수는 없다. 어떤 방에서 이동할 수 있는 방은 상하좌우로 인접한 빈 방이다. 
즉, 현재 운영진이 (x, y)에 있을 때, 이동할 수 있는 방은 (x+1, y), (x, y+1), (x-1, y), (x, y-1) 이다. 단, 미로의 밖으로 이동 할 수는 없다.

벽은 평소에는 이동할 수 없지만, 알고스팟의 무기 AOJ를 이용해 벽을 부수어 버릴 수 있다. 벽을 부수면, 빈 방과 동일한 방으로 변한다.

현재 (1, 1)에 있는 알고스팟 운영진이 (N, M)으로 이동하려면 
벽을 최소 몇 개 부수어야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 미로의 크기를 나타내는 가로 크기 M, 세로 크기 N (1 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 미로의 상태를 나타내는 숫자 0과 1이 주어진다. 0은 빈 방을 의미하고, 1은 벽을 의미한다.

(1, 1)과 (N, M)은 항상 뚫려있다.

출력
첫째 줄에 알고스팟 운영진이 (N, M)으로 이동하기 위해 벽을 최소 몇 개 부수어야 하는지 출력한다.

4 2
0001
1000
'''
import sys
import heapq

input = sys.stdin.readline
M,N = map(int, input().split(" "))
board = []
for _ in range(N):
  board.append( list( map( int,list( input().rstrip() ) ) ) )

INF = int(1e9)
wall_count = [ [INF]*M for _ in range(N) ]
wall_count[0][0] = 0
visited = [ [False]*M for _ in range(N) ]

# 상하좌우
direction_x = [-1, 1, 0, 0]
direction_y = [0,0,-1,1]

def print_matrix(b):
  print("#######################")
  for i in b:
    print(i)
  print("#######################")

def bfs():
  global N,M,visited, direction_x, direction_y, wall_count, board
  q = []
  # 시간초과나서 wall작은것부터 뽑는 우선순위 큐 사용
  heapq.heappush(q, (wall_count[0][0],0,0))
  
  
  while(len(q)>0):
    wall,x,y = heapq.heappop(q)
    
    # print_matrix(wall_count)
    # visited[x][y] = True
    # if(x==N-1 and y==M-1):
    #   break
    
    for i in range(4):
      new_x = x+direction_x[i]
      new_y = y+direction_y[i]

      if( new_x<0 or new_y<0 or new_x>N-1 or new_y>M-1 ):
        continue
      # if( visited[new_x][new_y] == True ):
      #   continue
      
      if(wall_count[new_x][new_y] > wall_count[x][y]):
        if(board[new_x][new_y] == 1):  
            wall_count[new_x][new_y] = wall_count[x][y] + 1
        else:
            wall_count[new_x][new_y] = wall_count[x][y]
        heapq.heappush(q, (wall_count[new_x][new_y], new_x, new_y))

  return wall_count[N-1][M-1]

print(bfs())
