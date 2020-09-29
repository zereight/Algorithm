import sys
input = sys.stdin.readline

from collections import deque

n = int(input().rstrip())
board = [] # 미로
dp = [] # 흰방으로 바꾼 개수 누적
INF = int(1e9)
for _ in range(n):
    board.append( list(map(int,list( input().rstrip() ) ) ) )
    dp.append( [INF]*n )
    

def bfs():
    global n, board, visited, dp
    # 상하좌우
    x_direction=[-1,1,0,0]
    y_direction=[0,0,-1,1]
    
    q = deque()
    q.append((0,0))
    dp[0][0]=0
    
    while(len(q) != 0):
        
        x,y = q.popleft()

        for i in range(4):
            new_x, new_y = x+x_direction[i], y+y_direction[i]
            
            if( new_x >= 0 and new_y>=0 and new_x<n and new_y<n ): # 유효범위 내에 있는지 체크
                
                if( board[new_x][new_y] == 0 ): # 검은벽
                  if(dp[new_x][new_y] > dp[x][y]+1): # 더 큰값이면 이동해서 작게 만들어준다.
                    dp[new_x][new_y] = dp[x][y]+1
                    q.append((new_x, new_y))
                else: # 하얀벽
                    if(dp[new_x][new_y] > dp[x][y]): # 더 큰값이면 이동해서 작게 만들어준다.
                        dp[new_x][new_y] = dp[x][y]
                        q.append((new_x, new_y))
    
bfs()
print(dp[n-1][n-1])
# for i in dp:
#   print(" ".join(map(str,i)))
              
